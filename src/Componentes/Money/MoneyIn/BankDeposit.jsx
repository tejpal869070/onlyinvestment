import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import {
  DepositRequest,
  GetPaymentMethod,
} from "../../../Controllers/User/UserController";
import { MdCancel } from "react-icons/md";
import { Loading1 } from "../../Loading1";
import { RiBankLine } from "react-icons/ri";
import gif1 from "../../../assets/photos/bankdepositgif.gif";
import DepositMethod from "./DepositMethod";
import successImg from "../../../assets/photos/giff6.gif";

export default function BankDeposit() {
  const inputClasses =
    "shadow-sm bg-transparent border-b-2 border-indigo-400 font-medium  border-x-0 border-t-0  focus:border-none dark:bg-gray-400 text-gray-900 sm:text-sm    block w-full p-2.5";

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
      toast.error("Please enter valid UTR no.",{
        position: "top-center",
      });
      setCreating(false);
      return;
    } else if (deposit_id < 0 || deposit_id === undefined) {
      toast.error("Please select deposit method.",{
        position: "top-center",
      });
      setCreating(false);
      return;
    } else if (amount === "" || amount < 100) {
      toast.error("Minimum deposit is Rs.100",{
        position: "top-center",
      });
      setCreating(false);
      return;
    } else if (image === null) {
      toast.error("Please upload payment screenshot",{
        position: "top-center",
      });
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
      <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center   z-[99999]">
        <img alt="success" src={successImg} className="w-60"/>
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
                    DEPOSIT MONEY (INR)
                  </h1>
                </div>
                <div className="  mb-4">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="  shadow-xl focus:animate-none   inline-flex text-md font-medium bg-indigo-500 mt-3 px-4 py-2 rounded-lg tracking-wide text-white"
                  >
                    <span className="ml-2 flex gap-2 items-center">
                      Bank Accounts. Deposit Here
                      <RiBankLine size={24} />
                    </span>
                  </button>
                </div>

                <form onSubmit={handleDeposit}>
                  <div className="grid grid-cols-12 gap-4 mt-6">
                    <div className="col-span-6 sm:col-span-6">
                      <input
                        type="text"
                        name="product-name"
                        id="product-name"
                        className={`${inputClasses}`}
                        placeholder="UTR NO."
                        required=""
                        value={utr}
                        onChange={(e) => setUtr(e.target.value)}
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <input
                        type="text"
                        name="product-name"
                        id="product-name"
                        className={`${inputClasses}`}
                        required=""
                        placeholder="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-12 mt-6">
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
                    <div className="flex align-center items-center mt-6 col-span-6 sm:col-span-6">
                      {image !== null ? (
                        <p className="w-full shadow-sm bg-indigo-500 border-2 pr-[22px] border-gray-700 dark:bg-gray-400 text-gray-900 font-medium  rounded-xl focus:ring-cyan-600 focus:border-cyan-600 block  px-2.5 py-2.5">
                          {image.name}
                        </p>
                      ) : (
                        <input
                          className="shadow-sm  bg-indigo-500 border pr-[22px] border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block  px-2.5"
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
                    {/* <button
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
                    </button> */}
                    <button
                      type="submit"
                      disabled={creating}
                      class="relative px-5 py-2 font-medium text-white group w-full"
                    >
                      <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-purple-500 group-hover:bg-purple-700 group-hover:skew-x-12"></span>
                      <span class="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                      <span class="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                      <span class="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                      <span class="relative">
                        {creating ? <Loading1 width={30} /> : "SUBMIT"}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
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
