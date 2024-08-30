import React from "react";

export default function SendMoney() {
  return (
    <div>
      <div>
        <p className="lg:pl-10 font-bold text-xl mb-6 dark:text-white">
          Account {">"}Send Money
        </p>
        <div className="bg-white dark:bg-black border border-4 dark:border-gray-300 rounded-lg shadow relative lg:mx-10  ">
          <div className="p-6 space-y-6">
            <p className="  font-medium text-lg text-[green] mb-4">
              Account Balance: $18.20
            </p>
            <form action="#" className="uppercase">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="product-name"
                    className="text-sm font-medium text-gray-900 dark:text-white block mb-2"
                  >
                    Client User ID:
                  </label>
                  <input
                    type="text"
                    name="product-name"
                    id="product-name"
                    className="shadow-sm bg-gray-50 border border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Client User ID"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="category"
                    className="text-sm font-medium text-gray-900 dark:text-white block mb-2"
                  >
                    Client Name :
                  </label>
                  <input
                    type="number"
                    name="category"
                    id="category"
                    className="shadow-sm bg-gray-50 border border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Client Name"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="product-details"
                    className="text-sm font-medium text-gray-900 dark:text-white block mb-2"
                  >
                    Amount To be Transferred :
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="shadow-sm bg-gray-50 border border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="AMOUNT"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    for="product-details"
                    className="text-sm font-medium text-gray-900 dark:text-white block mb-2"
                  >
                    Security Code *
                  </label>
                  <input
                    type="password"
                    name="price"
                    id="price"
                    className="shadow-sm bg-gray-50 border border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="******"
                    required=""
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6 mt-6">
                <a className="relative" href="/">
                  <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black dark:bg-gray-400"></span>
                  <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black dark:border-gray-500 bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                    SUBMIT
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
