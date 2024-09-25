import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  DepositRequest,
  GetPaymentMethod,
} from "../../../Controllers/User/UserController";
import { MdCancel } from "react-icons/md";
import { Loading1 } from "../../Loading1";
import CryptoDeposit from "./CryptoDeposit";
import gif1 from "../../../assets/photos/bankdepositgif.gif";
import DepositMethod from "./DepositMethod";
import successImg from "../../../assets/photos/success1-1--unscreen.gif";

export default function BankDeposit() {
  const inputClasses =
    "shadow-sm bg-gray-50 font-medium border border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5";

  const [tab, setTab] = useState(1);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [utr, setUtr] = useState("");
  const [amount, setAmount] = useState("");
  const [deposit_id, setSepositId] = useState();
  const [image, setImage] = useState(null);
  const [creating, setCreating] = useState(false);
  const [loading, setLoading] = useState(true);

  const [success, setSuccess] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };

  const [data, setData] = useState();

  // Get Deposit methodes -----------------------------------------------
  const getDepositMethode = async () => {
    const response = await GetPaymentMethod();
    if (response.status) {
      setPaymentMethods(response.data);
      setData(response.usdt[0]);
      setLoading(false);
    } else {
      setPaymentMethods([]);
    }
  };

  const formData = {
    utr: utr,
    amount: amount,
    deposit_id: deposit_id,
    image: image,
  };

  // Handle Deposit function
  const handleDeposit = async (e) => {
    e.preventDefault();
    setCreating(true);
    if (utr.length !== 12) {
      toast.error("Please enter valid UTR no.");
      setCreating(false);
      return;
    } else if (deposit_id < 0 || deposit_id === undefined) {
      toast.error("Please select deposit method.");
      setCreating(false);
      return;
    } else if (amount === "" || amount < 100) {
      toast.error("Minimum deposit is Rs.100");
      setCreating(false);
      return;
    } else if (image === null) {
      toast.error("Please upload payment screenshot");
      setCreating(false);
      return;
    }
    try {
      const response = await DepositRequest(formData);
      if (response.status) {
        setSuccess(true);
        setCreating(false);
        setAmount("");
        setUtr("");
        setImage(null);
        setSepositId();
        setTimeout(() => {
          setSuccess(false);
        }, 3500);
      } else {
        toast.error("Something Went Wrong");
        setCreating(false);
      }
    } catch (error) {
      if (error.response && error.response.status === 302) {
        toast.error(error.response.data.message);
        setAmount("");
        setUtr("");
        setImage(null);
        setSepositId();
        setCreating(false);
      } else {
        toast.error("Server Error !");
        setCreating(false);
      }
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
  };

  useEffect(() => {
    getDepositMethode();
  }, []);

  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-[9999]">
        <Loading1 />
      </div>
    );
  }

  if (success) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[#000000d1] bg-opacity-50 z-[9999]">
        <img alt="success" src={successImg} />
        <p className="text-2xl text-white font-semibold">
          Deposit Request Sent Successfully !
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className=" ">
         
        <div class="  mt-6 flex flex-col items-center justify-center  ">
          <div class="bg-[#e1e6ff] dark:bg-[#868ba3fc] text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden">
            <div class="md:flex flex-row-reverse w-full">
              <div class="hidden md:block w-1/2 bg-indigo-200  p-2">
                <img alt="animation" className="w-full h-full " src={gif1} />
              </div>
              <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div class="  mb-6">
                  <h1 class="font-bold text-3xl text-gray-900">
                    UPI & BANK DEPOSIT
                  </h1>
                </div>
                <div className="  mb-4">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="animate-bounce shadow-xl focus:animate-none   inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white"
                  >
                    <span className="ml-2">View Details to Deposit</span>
                  </button>
                </div>

                <form onSubmit={handleDeposit}>
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-6 sm:col-span-6">
                      <label
                        for="product-name"
                        className="text-sm font-medium text-gray-900 block mb-1 dark:text-gray-200"
                      >
                        UTR No.*
                      </label>
                      <input
                        type="text"
                        name="product-name"
                        id="product-name"
                        className={`${inputClasses}`}
                        placeholder=""
                        required=""
                        value={utr}
                        onChange={(e) => setUtr(e.target.value)}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <label
                        for="product-name"
                        className="text-sm font-medium text-gray-900 block mb-1 dark:text-gray-200"
                      >
                        Amount*
                      </label>
                      <input
                        type="text"
                        name="product-name"
                        id="product-name"
                        className={`${inputClasses}`}
                        required=""
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-12">
                      <label
                        for="product-name"
                        className="text-sm font-medium text-gray-900 block mb-1 dark:text-gray-200"
                      >
                        Deposit On*
                      </label>
                      <select
                        onChange={(e) => setSepositId(e.target.value)}
                        type="text"
                        name="product-name"
                        id="product-name"
                        className={`${inputClasses}`}
                        required=""
                      >
                        <option>---Select Deposit---</option>
                        {paymentMethods &&
                          paymentMethods.map((item, index) => (
                            <option value={item.id}>
                              {item.type === "UPI"
                                ? item.upi_id
                                : `Bank Account: ${item.ac_no},  ${item.ac_holder_name}`}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="flex align-center items-center mt-4 col-span-6 sm:col-span-6">
                      {image !== null ? (
                        <p className="w-full shadow-sm bg-gray-200 border-2 pr-[22px] border-gray-700 dark:bg-gray-400 text-gray-900 font-medium  rounded-xl focus:ring-cyan-600 focus:border-cyan-600 block  px-2.5 py-2.5">
                          {image.name}
                        </p>
                      ) : (
                        <input
                          className="shadow-sm  bg-gray-50 border pr-[22px] border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block  px-2.5"
                          name="product-name"
                          id="product-name"
                          type="file"
                          onChange={(e) => setImage(e.target.files[0]) || null}
                        />
                      )}
                      {image !== null ? (
                        <MdCancel
                          size={20}
                          className="cursor-pointer ml-[-32px]"
                          onClick={(e) => setImage(null)}
                        />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-start mt-10 gap-6 w-full">
                    <button
                      className="relative  w-full"
                      type="submit"
                      disabled={creating}
                    >
                      <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded-full bg-black dark:bg-gray-500"></span>
                      <span
                        className={`fold-bold text-center relative inline-block h-full w-full rounded-full border-2 border-black   bg-white px-3 py-1 text-base font-bold text-black transition hover:bg-yellow-400 duration-100  hover:text-gray-900 ${
                          creating ? "bg-yellow-400" : ""
                        }`}
                      >
                        {creating ? <Loading1 width={30} /> : "SUBMIT"}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-gray-400 mt-6 text-sm rounded-lg font-semibold pt-4 bg-gradient-to-r from-rose-100 to-teal-100 pl-2 pb-4">
            <p>Note.</p>
            <p>
              1. You can submit only one deposit request at a time, New request
              can be made after success or fail of previous one.
            </p>
            <p>2. Minimum deposit amount is Rs.100</p>
            <p>3. Submittion of wrong deposit details will be declined.</p>
          </div>
        </div>
      </div>
      {isOpen && (
        <DepositMethod onClose={onClose} paymentMethods={paymentMethods} />
      )}
      <ToastContainer />
    </div>
  );
}
