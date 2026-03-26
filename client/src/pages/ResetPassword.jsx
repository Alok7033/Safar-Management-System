import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const { setShowResetPassword, axios } = useAppContext();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1); // 1: send OTP, 2: verify OTP, 3: reset password
  const [timer, setTimer] = useState(0);

  // Timer countdown
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  // Step 1 → Send OTP
  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/user/send-reset-otp", { email });
      if (data.success) {
        toast.success("OTP sent to your email");
        setStep(2);
        setTimer(600); // 10 minutes
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  // Step 2 → Verify OTP
  const verifyOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/user/verify-reset-otp", {
        email,
        otp,
      });
      if (data.success) {
        toast.success("OTP verified successfully");
        setStep(3);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  // Step 3 → Reset Password
  const resetPasswordHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/user/reset-password", {
        email,
        otp,
        newPassword,
      });
      if (data.success) {
        toast.success("Password reset successfully!");
        setShowResetPassword(false);
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  // Resend OTP
  const resendOtpHandler = async () => {
    try {
      const { data } = await axios.post("/api/user/send-reset-otp", { email });
      if (data.success) {
        toast.success("OTP resent to your email");
        setTimer(600); // reset timer to 10 mins again
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div onClick={() => setShowResetPassword(false)} className="login-overlay">
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={
          step === 1
            ? sendOtpHandler
            : step === 2
            ? verifyOtpHandler
            : resetPasswordHandler
        }
        className="login-form"
      >
        <p className="login-title">Reset Password</p>

        {/* Email field */}
        {step === 1 && (
          <div className="form-group">
            <p>Email</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="form-input"
            />
          </div>
        )}

        {/* OTP field */}
        {step === 2 && (
          <>
            <div className="form-group">
              <p>OTP</p>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                required
                className="form-input"
              />
            </div>

            <button
              type="button"
              onClick={resendOtpHandler}
              disabled={timer > 0}
              className="form-submit"
            >
              {timer > 0
                ? `Resend OTP in ${formatTime(timer)}`
                : "Resend OTP"}
            </button>
          </>
        )}

        {/* New Password field */}
        {step === 3 && (
          <div className="form-group">
            <p>New Password</p>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              required
              className="form-input"
            />
          </div>
        )}

        <button type="submit" className="form-submit">
          {step === 1
            ? "Send OTP"
            : step === 2
            ? "Verify OTP"
            : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
