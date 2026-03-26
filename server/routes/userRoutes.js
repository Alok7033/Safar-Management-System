import express from "express";
import {
  getCars,
  getUserData,
  loginUser,
  logout,
  registerUser,
  verifyEmail,
  resendOtp,
  sendResetOtp,
  verifyResetOtp,     // 🟢 add this
  resetPassword
} from "../controllers/userController.js";

import { protect } from "../middleware/auth.js";

const userRouter = express.Router();

// Auth & Registration
userRouter.post("/register", registerUser);
userRouter.post("/verify-email", verifyEmail);
userRouter.post("/resend-otp", resendOtp);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logout);

// 🔹 Reset password flow
userRouter.post("/send-reset-otp", sendResetOtp);   // step 1: send otp
userRouter.post("/verify-reset-otp", verifyResetOtp); // step 2: verify otp
userRouter.post("/reset-password", resetPassword);   // step 3: reset password

// User info
userRouter.get("/getUserData", protect, getUserData);

// Cars
userRouter.get("/cars", getCars);

export default userRouter;
