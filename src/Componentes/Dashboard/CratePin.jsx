import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { ToastContainer, toast } from "react-toastify";
import { CreateAccountPin } from "../../Controllers/User/UserController";
import { Loading1 } from "../Loading1";
import gif1 from "../../assets/photos/giff4.gif";
import { MdCancel } from "react-icons/md";


const CreatePin = () => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePinCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (pin.length < 4) {
      setError("Invalid PIN");
      setLoading(false);
      return;
    }
    setError("");
    try {
      const response = await CreateAccountPin(pin);
      if (response.status) {
        setSuccess(true);
        setLoading(false);
      } else {
        setError("Something Went Wrong");
        setLoading(false);
      }
    } catch (error) {
      setError("Server Error"); 
      setLoading(false);
    }
  };

  const refresh = () => {
    window.location.reload(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50  ">
      <div className="  flex items-center justify-center">
        {!success ? (
          <form
            onSubmit={handlePinCreate}
            className="bg-gradient-to-r from-teal-200 to-teal-500 flex flex-col  items-center w-full mx-4 p-6 border-2 border-gray-200 rounded-xl animate-fade-down animate-once animate-duration-500"
          >
            <div className="flex justify-between items center  py-3">
              <div className="flex items-center justify-center">
                <p className="text-xl font-bold text-gray-200">
                  CREATE PIN
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
                border: "2px solid #ffb4b4",
                borderRadius: "2px",
                width: "50px",
                height: "50px",
                fontSize: "24px",
              }}
            />
            <p className="text-left text-[red] font-medium text-sm mt-2">
              {error}
            </p>
            <div className="mt-6">
              <button
                type="submit"
                disabled={loading}
                class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
              >
                <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                <span class="relative px-6 py-2 transition-all ease-out text-gray-100  rounded-md group-hover:bg-opacity-0 duration-400"> 
                  {loading ? <Loading1 width={30} /> : "SUBMIT"}
                </span> 
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-white flex flex-col  items-center w-full mx-4 p-4 rounded-xl animate-fade-down animate-once animate-duration-500 p-10">
            <img className="w-60 h-auto m-auto" alt="success" src={gif1} />
            <p
              className="mt-4 text-white font-semibold cursor-pointer   rounded-full   "
              onClick={refresh}
            >
              <MdCancel color="black" size={24}/>
            </p>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreatePin;

<a href="#_" class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
<span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
<span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
<span class="relative text-white">Button Text</span>
</span>
</a>
