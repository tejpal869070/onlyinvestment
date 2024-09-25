import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bg1 from "../../assets/photos/stadium.jpg";
import {
  SendOtp,
  userRegistration,
  VerifyOtp,
} from "../../Controllers/Auth/AuthController";
import { Loading1 } from "../../Componentes/Loading1";
import { FaArrowCircleLeft } from "react-icons/fa";

export default function OtpVerify({ goBack, formData }) {
  const [otp, setOtp] = useState("");
  const [otpVerifying, setOtpVerifying] = useState(false);
  const [otpSending, setOtpSending] = useState(false);

  const handleVerifyOtp = async () => {
    setOtpVerifying(true);
    if (otp.length !== 4) {
      toast("Invalid OTP");
      setOtpVerifying(false);
      return;
    }
    try {
      const response = await VerifyOtp({
        email: formData.email,
        otp: otp,
      });
      if (response.status === true) {
        formData.token = response.token;
        const regsiterResponse = await userRegistration(formData);
        if (regsiterResponse.status === true) {
          setOtpVerifying(false);
          toast.success("Registration Success!", {
            position: "top-center",
          });
          setTimeout(function () {
            window.location.href = "/login";
          }, 1500);
        } else {
          toast.error("Something went wrong !", {
            position: "top-center",
          });
          setOtpVerifying(false);
        }
      } else {
        toast.error("Incorrect OTP !", {
          position: "top-center",
        });
        setOtpVerifying(false);
      }
    } catch (error) {
      if (error.response.status === 400) {
        toast.error("Incorrect OTP !", {
          position: "top-center",
        });
        setOtpVerifying(false);
        return;
      } else {
        toast.error("Something went wrong !", {
          position: "top-center",
        });
        setOtpVerifying(false);
      }
    }
  };

  const resendOtp = async () => {
    setOtpSending(true);
    try {
      const response = await SendOtp(formData);
      if (response.status) {
        toast.success("OTP Sent Successfully!", {
          position: "top-center",
        });
        setOtpSending(false);
      } else {
        toast.error("Something went wrong !", {
          position: "top-center",
        });
        setOtpSending(false);
      }
    } catch (error) {
      toast.error("Something went wrong !", {
        position: "top-center",
      });
      setOtpSending(false);
    }
  };

  return (
    <div className=" min-h-screen bg-gray-500 bg-fixed  bg-no-repeat bg-cover py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10">
          <div className="mb-4 text-center">
            <h1 className="text-2xl font-semibold ">Enter OTP</h1>
            <p className="text-sm mt-2 text-center">{formData.email}</p>
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
                borderRadius: "2px",
                width: "40px",
                height: "40px",
              }}
            />
            <div className="relative mt-10">
              <div className="flex gap-4">
                <button
                  className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white"
                  onClick={resendOtp}
                >
                  {otpSending ? <Loading1 width={30} /> : "RESEND OTP"}
                </button>
                <button
                  className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white"
                  onClick={handleVerifyOtp}
                >
                  {otpVerifying ? <Loading1 width={30} /> : "VERIFY"}
                </button>
              </div>

              <div className="text-center mt-4 font-semibold  underline cursor-pointer">
                <div onClick={goBack} className="flex gap-1 items-center">
                  <FaArrowCircleLeft /> Go Back
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
