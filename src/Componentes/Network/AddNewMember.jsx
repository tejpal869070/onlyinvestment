import React from "react";

export default function AddNewMember() {
  return (
    <div className="relative z-0">
      <p className="lg:pl-10 font-semibold text-xl">Add New Member</p>
      <div class="bg-white border border-4 rounded-lg shadow relative lg:m-10 mt-6">
        <div class="flex items-start justify-between p-5 border-b rounded-t">
          <h3 class="text-sm font-semibold">PROFILE DETAIL</h3>
        </div>

        <div class="p-6 space-y-6">
          <form action="#">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="product-name"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  FIRST NAME
                </label>
                <input
                  type="text"
                  name="product-name"
                  id="product-name"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="TARUN"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="category"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  LAST NAME
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="SONI"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="brand"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  GENDER
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="MALE"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="price"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  PHONE NUMBER
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="+919876543210"
                  required=""
                />
              </div>
              <div class="col-span-full">
                <label
                  for="product-details"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  EMAIL
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="abc@gmail.com"
                  required=""
                />
              </div>
            </div>
          </form>
        </div>

         
      </div>

      {/* login details */}
      <div class="bg-white border border-4 rounded-lg shadow relative lg:m-10 mt-6">
        <div class="flex items-start justify-between p-5 border-b rounded-t">
          <h3 class="text-sm font-semibold">LOGIN DETAIL</h3>
        </div>

        <div class="p-6 space-y-6">
          <form action="#">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="product-name"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  LOGIN ID
                </label>
                <input
                  type="text"
                  name="product-name"
                  id="product-name"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="USER1234"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="category"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  POSITION
                </label>
                <input
                  type="text"
                  name="category"
                  id="category"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="LEFT"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="brand"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  PASSWORD
                </label>
                <input
                  type="password"
                  name="brand"
                  id="brand"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="*******"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="price"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  CONFIRM PASSWORD
                </label>
                <input
                  type="password"
                  name="price"
                  id="price"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="*******"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="product-details"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  YOUR SECURITY CODE*
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="541287"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="product-details"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  SPONSOR*
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="REFER542"
                  required=""
                />
              </div>
            </div>
          </form>
        </div>

        <div class="p-6 border-t border-gray-200 rounded-b">
          <button
            class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
          >
            Save all
          </button>
        </div>
      </div>
    </div>
  );
}
