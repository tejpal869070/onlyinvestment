import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import { FaCopy } from "react-icons/fa";
import { API } from "../../../Controllers/Api";
import { FaBitcoin } from "react-icons/fa"; 


export default function CryptoDeposit({ data }) {
  const [cryptoPrice, setCryptoPrice] = useState(data.price);
  const [usdtPrice, setUsdtPrice] = useState();
  const [inrPrice, setInrPrice] = useState();

  const handleInrChange = (value) => {
    setInrPrice(value);
    setUsdtPrice(value * cryptoPrice);
  };

  const handleUsdtChange = (value) => {
    setUsdtPrice(value);
    setInrPrice(value / cryptoPrice);
  };

  const handleCopy = () => {
    toast.success("Address Copied !", {
      position: "bottom-right",
    });
  };
  


   

  return (
    <div>
      <div className="w-full p-2 px-10 border-2 border-black dark:border-gray-200 mt-6 py-4 border-b-4 rounded-lg shadow-lg   flex flex-col">
        <div className="flex flex-wrap justify-between w-full">
          <div className="w-[60%] bg-[#77adfb75] p-4 rounded-lg">
            <div className="  border-b-2 border-dotted">
              <h1 className=" font-semibold text-lg dark:text-gray-200">
                {data?.currency} ADDRESS
              </h1>
              <p className=" dark:text-white font-semibold flex items-center gap-2  mt-1 py-1 inline-block  rounded-lg ">
                {data && data.address}{" "}
                <CopyToClipboard text={data.address} onCopy={handleCopy}>
                  <FaCopy className="cursor-pointer  " />
                </CopyToClipboard>
              </p>
            </div>
            <h1 className=" font-semibold text-lg text-[#426D98] dark:text-gray-400 mt-4">
              OR SCAN
            </h1>
            <div className="flex flex-wrap justify-between">
              <img
                alt="qr-code"
                src={`${API.url}assets/img/${data.qr_code}`}
                className="h-60 w-60   mt-4"
              />
              <div className="flex flex-row-reverse items-end ">
                <button
                  href="#_"
                  class="inline-flex overflow-hidden text-white bg-gray-900  rounded group"
                >
                  <span class="px-3.5 py-2.5 text-white bg-purple-500 group-hover:bg-purple-600 flex items-center justify-center">
                  <FaBitcoin size={24}/>
                  </span>
                  <span class="pl-4 pr-5 py-2.5">Complete Transection</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-[35%] bg-gray-300 dark:bg-[#1f2937] shadow-lg p-4 rounded-lg">
            <h1 className="font-semibold text-lg dark:text-gray-200">
              Current Rate in INR{"  "}
              <span className="text-2xl font-bold animate-pulse	 ">
                ₹{data?.price}
              </span>
            </h1>
            <div className="bg-[#3defff54] shadow-lg p-4 mt-4 rounded-lg">
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium dark:text-gray-200">INR</p>
                <input
                  className="w-[60%] rounded-lg text-sm font-medium p-2 py-1 border-2 border-gray-4000 "
                  placeholder="INR"
                  value={usdtPrice}
                  type="number"
                  onChange={(e) => handleUsdtChange(e.target.value)}
                />
              </div>
              <div className="flex mt-3 justify-between items-center">
                <p className="text-sm font-medium dark:text-gray-200"> {data.currency}</p>
                <input
                  className="w-[60%] rounded-lg text-sm font-medium p-2 py-1 border-2 border-gray-4000 "
                  placeholder={data.currency}
                  type="number"
                  value={inrPrice}
                  min={1}
                  onChange={(e) => handleInrChange(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="font-medium dark:text-white border-t-2 mt-6 border-black dark:border-white">
          <p className="text-[red] dark:text-white mt-2 font-semibold">Note:</p>
          <p>1. Minimum Deposit $10.00</p>
          <p>
            2. After complete the transaction amount will be credited in your
            account.
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
