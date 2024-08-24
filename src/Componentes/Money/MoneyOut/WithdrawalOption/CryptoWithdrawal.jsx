import React from "react";

export default function CryptoWithdrawal() {
  return (
    <div>
      <div class="bg-white dark:bg-black border border-4 rounded-lg dark:border-gray-300 shadow relative lg:mx-10  ">
        <div class="p-6 space-y-6">
          <p className="text-[red] font-medium">
            Dear All, <br />{" "}
            <span className="text-[#ff9842]">
              Please make a note, there will be 10% deduction if the deposit
              will be in INR and withdrawal in USDT. Rest it will remain the
              same. Thank you for the cooperation.
            </span>
          </p>
          <form action="#" className="uppercase">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="product-name"
                  class="text-sm font-medium dark:text-white text-gray-900 block mb-2"
                >
                  TRC20 Address*
                </label>
                <input
                  type="text"
                  name="product-name"
                  id="product-name"
                  class="shadow-sm bg-gray-50 border border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="TRC20 ADDRESS"
                  required=""
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="product-details"
                  class="text-sm font-medium dark:text-white text-gray-900 block mb-2"
                >
                  Withdrawal Amount *
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  class="shadow-sm bg-gray-50 border border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="WITHDRAW AMOUNT"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="product-details"
                  class="text-sm font-medium dark:text-white text-gray-900 block mb-2"
                >
                  Security Code *
                </label>
                <input
                  type="password"
                  name="price"
                  id="price"
                  class="shadow-sm bg-gray-50 border border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="******"
                  required=""
                />
              </div>
            </div>
            <div class="flex flex-wrap justify-center gap-6 mt-6">
              <a class="relative" href="/">
                <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black dark:bg-gray-400"></span>
                <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black dark:border-gray-500 bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                  CONFIRM WITHDRAWAL
                </span>
              </a>
              <a href="/" class="relative">
                <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-gray-700 dark:bg-gray-400"></span>
                <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black dark:border-gray-500 bg-black px-3 py-1 text-base font-bold text-white transition duration-100 hover:bg-gray-900 hover:text-yellow-500">
                  CLEAR
                </span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
