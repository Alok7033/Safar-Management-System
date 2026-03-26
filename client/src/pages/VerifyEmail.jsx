import React, { useState, useEffect } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import "../style/Login.css"; // reuse same styles

const VerifyEmail = () => {
  const { setShowVerifyEmail, axios, setUser, fetchUser } = useAppContext();
  const [otp, setOtp] = useState("");
  const email = localStorage.getItem("pendingEmail") || "";
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!otp) return toast.error("Enter OTP");
    setLoading(true);
    try {
      const { data } = await axios.post("/api/user/verify-email", { email, otp }, { withCredentials: true });

      if (data.success) {
        toast.success("Email verified ✅");

        // if backend returned token, store & apply it for subsequent requests
        if (data.token) {
          localStorage.setItem("token", data.token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
        }

        // fetch user to populate context (works with token in header or cookie)
        await fetchUser();

        // cleanup
        localStorage.removeItem("pendingEmail");
        localStorage.removeItem("pendingUserId");

        setShowVerifyEmail(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Verify Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      const { data } = await axios.post("/api/user/resend-otp", { email });
      if (data.success) {
        toast.success("New OTP sent to your email");
        setOtp("");
        setTimer(60);
        setCanResend(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to resend OTP");
    }
  };

  return (
    <div onClick={() => setShowVerifyEmail(false)} className="login-overlay">
      <form onClick={(e) => e.stopPropagation()} onSubmit={handleVerify} className="login-form">
        <p className="login-title"><span className="highlight">Email</span> Verification</p>
        <p>We’ve sent an OTP to <b>{email}</b>. Please enter it below:</p>

        <div className="form-group">
          <p>Enter OTP</p>
          <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" className="form-input" required />
        </div>

        <button type="submit" className="form-submit" disabled={loading}>{loading ? "Verifying..." : "Verify"}</button>

        <div className="resend-section">
          {canResend ? (
            <span onClick={handleResend} className="form-toggle" style={{ cursor: "pointer" }}>Resend OTP</span>
          ) : (
            <p>Resend available in {timer}s</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default VerifyEmail;


