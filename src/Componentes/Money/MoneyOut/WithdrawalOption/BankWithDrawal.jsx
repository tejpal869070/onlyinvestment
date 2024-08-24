import React from "react";

export default function BankWithDrawal() {
  return (
    <div>
      <div class="bg-white dark:bg-black border border-4 dark:border-gray-300 rounded-lg shadow relative lg:mx-10  ">
        <div class="p-6 space-y-6">
          <form action="#" className="uppercase">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="product-name"
                  class="text-sm font-medium text-gray-900 block mb-2 dark:text-white"
                >
                  Beneficary Name *
                </label>
                <input
                  type="text"
                  name="product-name"
                  id="product-name"
                  class="shadow-sm bg-gray-50 border border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="TARUN"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="category"
                  class="text-sm font-medium text-gray-900 block mb-2 dark:text-white"
                >
                  Account Number *
                </label>
                <input
                  type="number"
                  name="category"
                  id="category"
                  class="shadow-sm bg-gray-50 border border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="61289235654"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="brand"
                  class="text-sm font-medium text-gray-900 block mb-2 dark:text-white"
                >
                  Bank Name *
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  class="shadow-sm bg-gray-50 border border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="BANK NAME"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="price"
                  class="text-sm font-medium text-gray-900 block mb-2 dark:text-white"
                >
                  Bank Branch *
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  class="shadow-sm bg-gray-50 border border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="BANK BRANCH"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="product-details"
                  class="text-sm font-medium text-gray-900 block mb-2 dark:text-white"
                >
                  IFSC Code *
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  class="shadow-sm bg-gray-50 border border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="BANK6545"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="product-details"
                  class="text-sm font-medium text-gray-900 block mb-2 dark:text-white"
                >
                  Mobile *
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  class="shadow-sm bg-gray-50 border border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="MOBILE NUMBER"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="product-details"
                  class="text-sm font-medium text-gray-900 block mb-2 dark:text-white"
                >
                  Withdrawal Amount *
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  class="shadow-sm bg-gray-50 border border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="40 USDT"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="product-details"
                  class="text-sm font-medium text-gray-900 block mb-2 dark:text-white"
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
            <p className="font-semibold text-[#ff9600] normal-case mt-4">
              Note: It can take maximum 24hr days to complete this withdrawal,
              depending on your bank's holiday schedule and payment policies.
            </p>
            <p className="font-semibold text-[#ff9600] normal-case mt-1">
              The exact availability of your withdrawal is subject to your
              bank's processing schedules and funds availability policies.
            </p>

            <p className="font-semibold text-[red] normal-case mt-4">
              <span className="text-[red]">Note:</span> 1.) After change the
              withdrawal status to "Completed", Please wait 24hr to get amount
              in your account.
            </p>
            <p className="font-semibold text-[red] normal-case mt-1">
              2.) After 24hr to completed the status, If amount is not credited
              in your account then you can claim in next 7 working days.
            </p>
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
