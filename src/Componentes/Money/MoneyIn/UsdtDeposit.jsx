import React, { useState } from "react";
import qrcode from "../../../assets/photos/deposit-qr.png";
import { FaCopy } from "react-icons/fa";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function UsdtDeposit() {
  const [tab, setTab] = useState(1);

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
  return (
    <div>
      <div className=" ">
        <p className="font-bold text-xl dark:text-white">
          Money In
        </p>
        <div class="flex flex-wrap   gap-6 mt-6">
          <p class="relative cursor-pointer" onClick={() => setTab(1)}>
            <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black dark:bg-gray-300"></span>
            <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black dark:border-gray-700 bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
              BANK DEPOSIT
            </span>
          </p>
          <p class="relative cursor-pointer" onClick={() => setTab(2)}>
            <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black dark:bg-gray-300"></span>
            <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black dark:border-gray-700 bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
              CRYPTO DEPOSIT
            </span>
          </p>
        </div>
        {tab === 1 ? (
          <div className="w-full p-2 border-2 border-black dark:border-gray-100 shadow-lg mt-6 py-4 border-b-4 rounded-lg shadow-lg m-auto flex flex-col">
            <div class="grid grid-cols-12 gap-4 w-full">
              <div class="col-span-12 md:col-span-6 p-6 rounded bg-gray-200 dark:bg-gray-600">
                <p className="mb-4 font-semibold text-lg border-b-[1px] border-black dark:text-white">
                  Send INR on any of one account and fill details.
                </p>
                <Slider {...settings}>
                  {Array.from({ length: 5 }, (_, i) => i).map((item) => (
                    <div className="text-lg dark:text-gray-200 font-medium flex ">
                      <p className="mb-2">Bank Name : SBI</p>
                      <p className="mb-2">Account Name : Rakesh</p>
                      <p className="mb-2">Account Number : 1324657987</p>
                      <p className="mb-2">IFSC : SBin546465</p>
                    </div>
                  ))}
                </Slider>
              </div>

              <div class="col-span-12 md:col-span-6 ">
                <div class="mb-2 ">
                  <label
                    for="product-name"
                    class="text-sm font-medium text-gray-900 block   dark:text-white"
                  >
                    UTR No.*
                  </label>
                  <input
                    type="text"
                    name="product-name"
                    id="product-name"
                    class="shadow-sm bg-gray-50 border border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-[70%] p-2.5"
                    placeholder="TARUN"
                    required=""
                  />
                </div>
                <div class="mb-2 ">
                  <label
                    for="product-name"
                    class="text-sm font-medium text-gray-900 block   dark:text-white"
                  >
                    Amount *
                  </label>
                  <input
                    type="text"
                    name="product-name"
                    id="product-name"
                    class="shadow-sm bg-gray-50 border border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-[70%] p-2.5"
                    placeholder="TARUN"
                    required=""
                  />
                </div>
                <div class="mb-2 ">
                  <label
                    for="product-name"
                    class="text-sm font-medium text-gray-900 block   dark:text-white"
                  >
                    Deposit Method *
                  </label>
                  <select className="shadow-sm bg-gray-50 border border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-[70%] p-2.5">
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
                <div class="mb-2 mt-4">
                  <input
                    className="shadow-sm bg-gray-50 border border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-[70%] px-2.5"
                    name="product-name"
                    id="product-name"
                    type="file"
                  />
                </div>
                <div class="flex flex-wrap justify-start mt-6 gap-6 w-full">
                  <a class="relative w-[70%]" href="/">
                    <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded-full bg-black dark:bg-gray-500"></span>
                    <span class="fold-bold text-center relative inline-block h-full w-full rounded-full border-2 border-black   bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                      SUBMIT
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full p-2 border-2 border-black dark:border-gray-200 mt-6 py-4 border-b-4 rounded-lg shadow-lg m-auto flex flex-col">
            <h1 className="text-center font-semibold text-lg dark:text-white">
              TRC20 USDT ADDRESS
            </h1>
            <p className="text-center dark:text-white font-semibold flex  justify-center align-center items-center gap-2  bg-[#ff9600] px-4 mt-2 py-1 inline m-auto rounded-lg ">
              TGw3xDnEoc7xycSvLDM2k4KiPrpyHpTZws{" "}
              <FaCopy className="cursor-pointer  " />
            </p>
            <h1 className="text-center font-semibold text-lg text-[#426D98] mt-4">
              OR SCAN
            </h1>
            <img alt="qr-code" src={qrcode} className="h-60 w-60 m-auto mt-4" />

            <div className="font-medium dark:text-white border-t-2 mt-6 border-black dark:border-white">
              <p className="text-[red] dark:text-white mt-2 font-semibold">
                Note:
              </p>
              <p>1. Minimum Deposit $10.00</p>
              <p>
                2. After complete the transaction amount will be credited in
                your account.
              </p>
            </div>
          </div>
        )}
        {/*  */}
      </div>
    </div>
  );
}
