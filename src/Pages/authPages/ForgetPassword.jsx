import React, { useState } from "react";
import bg1 from "../../assets/photos/forgot-password-img.jpg";
import { Link } from "react-router-dom";
import {
  ForgetPasswordApi,
  SendOtp,
  VerifyOtp,
} from "../../Controllers/Auth/AuthController";
import { Loading1 } from "../../Componentes/Loading1";
import OTPInput from "react-otp-input";
import { ToastContainer, toast } from "react-toastify";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyOtp, setVerifyOtp] = useState(false);
  const [otpSuccess, setOtpSuccess] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);

  const formData = {
    email: email,
    token: token,
    password: password,
  };

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (email.length < 10) {
      setError("Enter Valid Email.");
      setLoading(false);
      return;
    }

    try {
      // otp send function
      const otpResponse = await SendOtp(formData);

      if (otpResponse.status) {
        setError("");
        setOtpSent(true);
      } else {
        setError("Server Error !");
      }
    } catch (error) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  // Otp verification---------------------------------------------------------
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setVerifyOtp(true);
    if (otp.length < 4) {
      toast.error("Invalid OTP");
      setVerifyOtp(false);
      return;
    }
    formData.otp = otp;
    try {
      const verifyResponse = await VerifyOtp(formData);
      if (verifyResponse.status) {
        setToken(verifyResponse.token);
        toast.success("OTP Verified Successfully");
        setVerifyOtp(false);
        setOtpSuccess(true);
        setOtp("");
      } else {
        toast.error("Invalid OTP");
        setVerifyOtp(false);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error("Invalid OTP");
        setVerifyOtp(false);
      } else {
        toast.error("Server Error !");
        setVerifyOtp(false);
      }
    }
  };

  //   Change Password
  const handleChangePassword = async (e) => {
    e.preventDefault();
    setChangingPassword(true);
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      setChangingPassword(false);
      return;
    } else if (password !== confirmPassword) {
      toast.error("Passwords must be same");
      setChangingPassword(false);
      return;
    }
    try {
      const response = await ForgetPasswordApi(formData);
      if (response.status) {
        toast.success("Password Changed Successfully");
        setChangingPassword(false);
        setTimeout(() => {
          window.location.href = "/login";
        }, 1300);
      } else {
        toast.error("Failed to Change Password");
        setChangingPassword(false);
      }
    } catch (error) {
      toast.error("Server Error !");

      setChangingPassword(false);
    }
  };

  // Resent otp---------------------------------------------------------------
  const handleResendOtp = async () => {
    try {
      setSendingOtp(true);
      const otpResponse = await SendOtp(formData);
      if (otpResponse.status) {
        setError("");
        toast.success("OTP Sent.", {
          position: "top-center",
        });
      } else {
        setError("Server Error !");
      }
    } catch (error) {
      setError("Server Error !");
    } finally {
      setSendingOtp(false);
    }
  };

  return (
    <div className="bg-indigo-700 h-screen">
      <div className="container mx-auto ">
        <div className="flex justify-center   px-6 py-12">
          <div className="w-auto bg-white p-5 rounded-lg lg:rounded-l-none">
            <div className="px-8 mb-2  ">
              <h3 className="pt-4 mb-2 text-2xl font-semibold">
                Forgot Your Password?
              </h3>
              <p className="mb-2 text-sm text-[red]">{error}</p>
            </div>
            {!otpSuccess ? (
              !otpSent ? (
                <form
                  className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                  onSubmit={handleForgetPassword}
                >
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Email Address..."
                    />
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="px-6 py-2 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? <Loading1 width={30} /> : "SUBMIT"}
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                </form>
              ) : (
                <form
                  className="px-8 pt-4 pb-8 mb-4 bg-white rounded"
                  onSubmit={handleVerifyOtp}
                >
                  <div className="flex flex-col">
                    <p className="mb-4  text-lg font-bold text-gray-700">
                      Enter OTP
                    </p>

                    <OTPInput
                      value={otp}
                      onChange={setOtp}
                      numInputs={4}
                      renderSeparator={<span>-</span>}
                      renderInput={(props) => <input {...props} />}
                      inputStyle={{
                        border: "2px double black",
                        borderRadius: "10px",
                        width: "40px",
                        height: "40px",
                      }}
                    />
                    <p
                      className="text-sm italic mt-1 font-medium cursor-pointer"
                      onClick={handleResendOtp}
                    >
                      {sendingOtp ? "Sending..." : "Resend OTP Again"}
                    </p>
                    <button
                      type="submit"
                      disabled={verifyOtp}
                      className="px-6 py-2 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring mt-4"
                    >
                      {verifyOtp ? <Loading1 width={30} /> : "VERIFY"}
                    </button>
                  </div>
                </form>
              )
            ) : (
              <div className="px-8 pt-4 pb-8 mb-4 bg-white rounded">
                <form onSubmit={handleChangePassword}>
                  <div className="mb-4 flex flex-col gap-4">
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="New Password..."
                    />
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm Password..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={changingPassword}
                    className="px-6 py-2 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring mt-4"
                  >
                    {changingPassword ? <Loading1 width={30} /> : "SUBMIT"}
                  </button>
                </form>
              </div>
            )}
            <div className="flex gap-6">
              <div className="text-center">
                <Link
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  to={"/register"}
                >
                  Register
                </Link>
              </div>
              <div className="text-center">
                <Link
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  to={"/login"}
                >
                 Have Account ? Login!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
