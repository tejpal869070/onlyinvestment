import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { ToastContainer, toast } from "react-toastify";
import { Loading1 } from "./Loading1";
import { PinVerification } from "../Controllers/Auth/AuthController";
import { MdCancel } from "react-icons/md";

const VerifyPin = ({ onclose2, successFunction }) => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const checkPin = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (pin.length !== 4) {
      toast.error("Invalid PIN", {
        position: "bottom-right",
      });
      setLoading(false);
      return;
    }
    try {
      const response = await PinVerification(pin);
      if (response.status) {
        setLoading(false);
        toast.success("Verification Success !", {
          position: "bottom-right",
        });
        successFunction(pin);
        setTimeout(() => {
          onclose2();
        }, 1000);
      } else {
        toast.error("Please Try Again.", {
          position: "bottom-right",
        });
        setLoading(false);
        setPin("");
      }
    } catch (error) {
      if (error?.response?.status === 302) {
        toast.error(`${error.response.data.message}`, {
          position: "bottom-right",
        });
        setLoading(false);
      } else {
        toast.error("Server Error", {
          position: "bottom-right",
        });
        setLoading(false);
      }
    }
  };

  return (
    <div className="fixed z-[99999] top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50  ">
      <div className="  flex items-center justify-center">
        <form
          onSubmit={checkPin}
          className=" bg-gray-200 flex flex-col  items-center w-full mx-4 p-4 rounded-xl animate-fade-down animate-once animate-duration-500"
        >
          <div className="flex justify-between items center border-b border-gray-200 py-3">
            <div className="flex items-center justify-center">
              <p className="text-xl font-bold text-gray-800">
                Acoount Verification PIN
              </p>
            </div>
          </div>
          <OTPInput
            value={pin}
            onChange={setPin}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={{
              border: "3px solid #918e91",
              borderRadius: "4px",
              width: "50px",
              height: "50px",
              fontSize: "20px",
            }}
          />
          <p className="text-left text-[red] font-medium text-sm mt-2">
            {error}
          </p>
          <div className="mt-6">
            <button
              disabled={loading}
              type="submit"
              class="relative px-5 py-2 font-medium text-white group"
            >
              <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
              <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
              <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
              <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
              <span class="relative">
                {loading ? <Loading1 width={30} /> : "SUBMIT"}
              </span>
            </button>
            <div className="text-center flex justify-center mt-2 cursor-pointer">
              <MdCancel size={24} onClick={onclose2} />
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default VerifyPin;

{
  /* <button
  disabled={loading}
  type="submit"
  class="relative bg-[#919ffc] inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
>
  <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
  <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
  <span class="relative w-full text-left text-gray-100 transition-colors duration-200 ease-in-out group-hover:text-gray-900">
    {loading ? <Loading1 width={30} /> : "SUBMIT"}
  </span>
  <span class="absolute inset-0 border-2 border-white rounded-full"></span>
</button>; */
}
