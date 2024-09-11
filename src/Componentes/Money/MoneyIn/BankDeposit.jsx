import React, { useEffect, useState } from "react";
import { FaCopy } from "react-icons/fa";
import Slider from "react-slick";
import { ToastContainer, toast } from "react-toastify";
import {
  DepositRequest,
  GetPaymentMethod,
} from "../../../Controllers/User/UserController";
import { MdCancel } from "react-icons/md";
import { Loading1 } from "../../Loading1";
import { API } from "../../../Controllers/Api";
import CopyToClipboard from "react-copy-to-clipboard";
import CryptoDeposit from "./CryptoDeposit";

export default function BankDeposit() {
  const [tab, setTab] = useState(1);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [utr, setUtr] = useState("");
  const [amount, setAmount] = useState("");
  const [deposit_id, setSepositId] = useState();
  const [image, setImage] = useState(null);
  const [creating, setCreating] = useState(false);
  const [loading, setLoading] = useState(true);

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
        toast.success("Deposit successful");
        setCreating(false);
        setAmount("");
        setUtr("");
        setImage(null);
        setSepositId();
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

  return (
    <div>
      <div className=" ">
        <p className="font-bold text-xl dark:text-white">Money In</p>
        <div className="flex flex-wrap   gap-6 mt-6">
          <p className="relative cursor-pointer" onClick={() => setTab(1)}>
            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black dark:bg-gray-300"></span>
            <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black dark:border-gray-700 bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
              BANK DEPOSIT
            </span>
          </p>
          <p className="relative cursor-pointer" onClick={() => setTab(2)}>
            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black dark:bg-gray-300"></span>
            <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black dark:border-gray-700 bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
              CRYPTO DEPOSIT
            </span>
          </p>
        </div>
        {tab === 1 ? (
          <div className="w-full p-2 border-2 border-black dark:border-gray-100 shadow-lg mt-6 py-4 border-b-4 rounded-lg shadow-lg m-auto flex flex-col">
            <div className="grid grid-cols-12 gap-4 w-full">
              <div className="col-span-12 md:col-span-6 p-6 rounded bg-gray-200 dark:bg-gray-600">
                <p className="mb-4 font-semibold text-lg border-b-[1px] border-black dark:text-white">
                  Send INR on any of one account and fill details.
                </p>
                <Slider {...settings}>
                  {paymentMethods &&
                    paymentMethods.map((item, index) => (
                      <div
                        className="text-lg dark:text-gray-200 font-medium flex "
                        key={index}
                      >
                        <p className="mb-2">Bank Name : {item.name}</p>
                        <p className="mb-2">
                          Account Holder : {item.ac_holder_name}
                        </p>
                        <p className="mb-2">Account Number : {item.ac_no}</p>
                        <p className="mb-2">IFSC : {item.ifsc_code}</p>
                        <p className="mb-2">Account Type : {item.ac_type}</p>
                      </div>
                    ))}
                </Slider>
              </div>

              <form
                className="col-span-12 md:col-span-6 "
                onSubmit={handleDeposit}
              >
                <div className="mb-2 ">
                  <label
                    for="product-name"
                    className="text-sm font-medium text-gray-900 block   dark:text-white"
                  >
                    UTR No.*
                  </label>
                  <input
                    type="text"
                    name="product-name"
                    id="product-name"
                    className="shadow-sm bg-gray-50 border border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-[70%] p-2.5"
                    placeholder=""
                    required=""
                    value={utr}
                    onChange={(e) => setUtr(e.target.value)}
                  />
                </div>
                <div className="mb-2 ">
                  <label
                    for="product-name"
                    className="text-sm font-medium text-gray-900 block   dark:text-white"
                  >
                    Amount *
                  </label>
                  <input
                    type="text"
                    name="product-name"
                    id="product-name"
                    className="shadow-sm bg-gray-50 border border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-[70%] p-2.5"
                    placeholder=""
                    required=""
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="mb-2 ">
                  <label
                    for="product-name"
                    className="text-sm font-medium text-gray-900 block   dark:text-white"
                  >
                    Deposit Method *
                  </label>

                  <select
                    onChange={(e) => setSepositId(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-[70%] p-2.5"
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
                <div className="mb-2 mt-4 flex items-center">
                  {image !== null ? (
                    <p className="shadow-sm bg-gray-50 border pr-[22px] border-gray-300 dark:bg-gray-400 text-gray-900 font-medium  rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-[70%] px-2.5 py-3">
                      {image.name}
                    </p>
                  ) : (
                    <input
                      className="shadow-sm bg-gray-50 border pr-[22px] border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-[70%] px-2.5"
                      name="product-name"
                      id="product-name"
                      type="file"
                      onChange={(e) => setImage(e.target.files[0]) || null}
                    />
                  )}
                  {image !== null ? (
                    <MdCancel
                      size={20}
                      className="cursor-pointer ml-[-22px]"
                      onClick={(e) => setImage(null)}
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex flex-wrap justify-start mt-6 gap-6 w-full">
                  <button
                    className="relative w-[70%]"
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
            <div className="border-t-2 border-gray-400 mt-6 text-sm rounded-lg font-semibold pt-4 bg-gradient-to-r from-rose-100 to-teal-100 pl-2 pb-4">
              <p>Note.</p>
              <p>
                1. You can submit only one deposit request at a time, New
                request can be made after success or fail of previous one.
              </p>
              <p>2. Minimum deposit amount is Rs.100</p>
              <p>3. Submittion of wrong deposit details will be declined.</p>
            </div>
          </div>
        ) : (
          <CryptoDeposit data={data} />
        )}
        {/*  */}
      </div>
      <ToastContainer />
    </div>
  );
}
