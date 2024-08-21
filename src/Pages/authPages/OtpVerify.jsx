import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bg1 from "../../assets/photos/stadium.jpg";

export default function OtpVerify() {
  const [otp, setOtp] = useState("");

  const handleVerifyOtp = () => {
    if (otp.length !== 4) {
      toast("Invalid OTP");
      return;
    }
    window.location.href = "/home";
  };

  return (
    <div
      className="min-h-screen  bg-fixed  bg-no-repeat bg-cover py-6 flex flex-col justify-center sm:py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg1})`,
      }}
    >
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="mb-4 text-center">
            <h1 className="text-2xl font-semibold ">Enter OTP</h1>
            <p className="text-sm mt-2 text-center">
              OTP sent at tsoni9742@gmai.com
            </p>
          </div>
          <div className="flex justify-center items-center flex-col m-auto">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                border: "2px solid black",
                borderRadius: "10px",
                width: "40px",
                height: "40px",
              }}
            />
            <div className="relative mt-10">
              <button
                className="bg-cyan-500 font-semibold text-white rounded-md px-6 py-2"
                onClick={handleVerifyOtp}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
