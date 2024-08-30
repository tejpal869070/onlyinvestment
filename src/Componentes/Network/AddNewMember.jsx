import React from "react";

export default function AddNewMember() {
  return (
    <div className="relative z-0">
      <p className="lg:pl-10 font-semibold text-xl dark:text-white">Add New Member</p>
      <div className="bg-white dark:bg-[#00000000] border-gray-500 border-4 rounded-lg shadow relative lg:m-10 mt-6">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-sm font-semibold dark:text-white">PROFILE DETAIL</h3>
        </div>

        <div className="p-6 space-y-6">
          <form action="#">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="product-name"
                  className="text-sm  dark:text-white font-medium text-gray-900 block mb-2"
                >
                  FIRST NAME
                </label>
                <input
                  type="text"
                  name="product-name"
                  id="product-name"
                  className="shadow-sm bg-gray-50 border border-gray-300 dark:text-white text-gray-900 text-[16px] rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-gray-500"
                  placeholder=""
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="category"
                  className="text-sm  dark:text-white font-medium text-gray-900 block mb-2"
                >
                  LAST NAME
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  className="shadow-sm bg-gray-50 border border-gray-300 dark:text-white text-gray-900 text-[16px] rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-gray-500"
                  placeholder=""
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="brand"
                  className="text-sm font-medium  dark:text-white text-gray-900 block mb-2"
                >
                  GENDER
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  className="shadow-sm bg-gray-50 border border-gray-300 dark:text-white text-gray-900 text-[16px] rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-gray-500"
                  placeholder="MALE"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="price"
                  className="text-sm font-medium  dark:text-white text-gray-900 block mb-2"
                >
                  PHONE NUMBER
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="shadow-sm bg-gray-50 border border-gray-300 dark:text-white text-gray-900 text-[16px] rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-gray-500"
                  placeholder="+919876543210"
                  required=""
                />
              </div>
              <div className="col-span-full">
                <label
                  for="product-details"
                  className="text-sm font-medium  dark:text-white text-gray-900 block mb-2"
                >
                  EMAIL
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="shadow-sm bg-gray-50 border border-gray-300 dark:text-white text-gray-900 text-[16px] rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-gray-500"
                  placeholder="abc@gmail.com"
                  required=""
                />
              </div>
            </div>
          </form>
        </div>

         
      </div>

      {/* login details */}
      <div className="bg-white dark:bg-[#00000000] border-gray-500 border-4 rounded-lg shadow relative lg:m-10 mt-6">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-sm font-semibold dark:text-white">LOGIN DETAIL</h3>
        </div>

        <div className="p-6 space-y-6">
          <form action="#">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="product-name"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-white"
                >
                  LOGIN ID
                </label>
                <input
                  type="text"
                  name="product-name"
                  id="product-name"
                  className="shadow-sm bg-gray-50 border border-gray-300  dark:text-white text-gray-900 text-[16px] rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-gray-500"
                  placeholder="USER1234"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="category"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-white"
                >
                  POSITION
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  className="shadow-sm bg-gray-50 border border-gray-300  dark:text-white text-gray-900 text-[16px] rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-gray-500"
                  placeholder="LEFT"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="brand"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-white"
                >
                  PASSWORD
                </label>
                <input
                  type="password"
                  name="brand"
                  id="brand"
                  className="shadow-sm bg-gray-50 border border-gray-300  dark:text-white text-gray-900 text-[16px] rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-gray-500"
                  placeholder="*******"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="price"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-white"
                >
                  CONFIRM PASSWORD
                </label>
                <input
                  type="password"
                  name="price"
                  id="price"
                  className="shadow-sm bg-gray-50 border border-gray-300  dark:text-white text-gray-900 text-[16px] rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-gray-500"
                  placeholder="*******"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="product-details"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-white"
                >
                  YOUR SECURITY CODE*
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="shadow-sm bg-gray-50 border border-gray-300  dark:text-white text-gray-900 text-[16px] rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-gray-500"
                  placeholder="541287"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="product-details"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-white"
                >
                  SPONSOR*
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="shadow-sm bg-gray-50 border border-gray-300  dark:text-white text-gray-900 text-[16px] rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 dark:bg-gray-500"
                  placeholder="REFER542"
                  required=""
                />
              </div>
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-gray-200 rounded-b">
          <button
            className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
          >
            Save all
          </button>
        </div>
      </div>
    </div>
  );
}
