import User from "../models/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Car from "../models/Bike.js";
import transporter from "../configs/nodemailer.js";
import { v4 as uuidv4 } from "uuid";

// ======================= TEMP STORAGE =======================
const pendingUsers = new Map(); // temporary for email verification
let resetOtps = {}; // temporary for password reset

// ======================= TOKEN HELPER =======================
const generateToken = (userId) => {
  const payload = { userId };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// ======================= REGISTER =======================
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password || password.length < 8) {
      return res.json({ success: false, message: "Fill all the fields" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.json({ success: false, message: "User already exists" });
    }

    const otp = String(Math.floor(100000 + Math.random() * 900000));
    const hashedPassword = await bcrypt.hash(password, 10);
    const tempId = uuidv4();

    pendingUsers.set(email, {
      id: tempId,
      name,
      email,
      password: hashedPassword,
      otp,
      otpExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    });

    const mailOption = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Verify Your Email",
      text: `Your OTP is ${otp}. Verify your account with this OTP`,
    };
    await transporter.sendMail(mailOption);

    res.json({
      success: true,
      message: "OTP sent to email. Please verify to complete registration.",
      email,
      userId: tempId,
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// ======================= VERIFY EMAIL =======================
export const verifyEmail = async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) {
    return res.json({ success: false, message: "Missing details" });
  }

  try {
    const pending = pendingUsers.get(email);
    if (!pending) {
      return res.json({ success: false, message: "No pending registration" });
    }

    if (pending.otp !== otp) {
      return res.json({ success: false, message: "Invalid OTP" });
    }

    if (pending.otpExpiresAt < Date.now()) {
      pendingUsers.delete(email);
      return res.json({ success: false, message: "OTP expired" });
    }

    const user = await User.create({
      name: pending.name,
      email: pending.email,
      password: pending.password,
      isAccountVerified: true,
    });

    pendingUsers.delete(email);

    const token = generateToken(user._id.toString());

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      success: true,
      message: "Email verified and account created successfully",
      userData: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAccountVerified: true,
        role: user.role || "user",
      },
      token,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

// ======================= RESEND OTP =======================
export const resendOtp = async (req, res) => {
  const { email } = req.body;

  if (!email) return res.json({ success: false, message: "Email required" });

  const pending = pendingUsers.get(email);
  if (!pending) {
    return res.json({ success: false, message: "No pending registration found" });
  }

  try {
    const newOtp = String(Math.floor(100000 + Math.random() * 900000));
    pending.otp = newOtp;
    pending.otpExpiresAt = Date.now() + 24 * 60 * 60 * 1000;

    const mailOption = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Resend OTP - Verify Your Email",
      text: `Your new OTP is ${newOtp}.`,
    };
    await transporter.sendMail(mailOption);

    res.json({ success: true, message: "New OTP sent to email" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ======================= RESET PASSWORD =======================
export const sendResetOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.json({ success: false, message: "User not found" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    resetOtps[email] = {
      otp,
      expiresAt: Date.now() + 10 * 60 * 1000, // 10 mins
      verified: false,
    };

    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Password Reset OTP",
      text: `Your OTP for password reset is: ${otp}. It is valid for 10 minutes.`,
    };

    await transporter.sendMail(mailOptions);

    return res.json({ success: true, message: "OTP sent to your email" });
  } catch (error) {
    return res.json({ success: false, message: "Error sending OTP" });
  }
};

// ✅ Verify Reset OTP
export const verifyResetOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const record = resetOtps[email];

    if (!record) return res.json({ success: false, message: "No OTP requested" });
    if (record.expiresAt < Date.now()) {
      delete resetOtps[email];
      return res.json({ success: false, message: "OTP expired" });
    }
    if (record.otp !== otp) return res.json({ success: false, message: "Invalid OTP" });

    resetOtps[email].verified = true;
    return res.json({ success: true, message: "OTP verified. You can now reset your password." });
  } catch (error) {
    return res.json({ success: false, message: "Error verifying OTP" });
  }
};

// ✅ Reset Password only after OTP verified
export const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const record = resetOtps[email];

    if (!record || !record.verified) {
      return res.json({ success: false, message: "OTP not verified" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await User.updateOne({ email }, { password: hashedPassword });

    delete resetOtps[email];

    return res.json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    return res.json({ success: false, message: "Error resetting password" });
  }
};

// ======================= LOGIN =======================
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }

    if (!user.isAccountVerified) {
      return res.json({
        success: false,
        message: "Please verify your email before login.",
      });
    }

    const token = generateToken(user._id.toString());

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({
      success: true,
      message: "Login successful",
      userData: {
        id: user._id,
        name: user.name,
        email: user.email,
        isAccountVerified: user.isAccountVerified,
        role: user.role || "user",
      },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ======================= LOGOUT =======================
export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    });
    res.json({ success: true, message: "Logged Out" });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

// ======================= GET CARS =======================
export const getCars = async (req, res) => {
  try {
    // fetch only cars that are available
    const cars = await Car.find({ isAvailable: true })
      .select("brand model year category seating_capacity fuel_type transmission pricePerDay location description image isAvailable");

    res.status(200).json({ success: true, cars });
  } catch (error) {
    console.error("Error fetching cars:", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


// ======================= GET USER DATA =======================
export const getUserData = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ success: false, message: "No token found" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({
      success: true,
      userData: {
        id: user._id,
        name: user.name,
        email: user.email,
        image: user.image,
        isAccountVerified: user.isAccountVerified,
        role: user.role || "user",
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

