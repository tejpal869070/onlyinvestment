import React, { useState } from "react";
import ViewPlans from "./ViewPlans";

export default function NewInvestment() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };
  const options = [
    { label: "BASIC", value: "BASIC" },
    { label: "SILVER", value: "SILVER" },
    { label: "GOLD", value: "GOLD" },
    { label: "DIAMOND", value: "DIAMOND" },
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  return (
    <div>
      <div>
        <p className="lg:pl-10 font-bold dark:text-white text-xl mb-6">
          Investment {">"}New Investment
        </p>
        <div className="ml-10 mb-4">
          <button
            onClick={() => setIsOpen(true)}
            className="animate-bounce shadow-xl focus:animate-none   inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white"
          >
            <span className="ml-2">View Plans 🏀</span>
          </button>
        </div>
        <div className="bg-white dark:bg-black border border-4 rounded-lg shadow relative lg:mx-10  ">
          <div className="p-6 space-y-6">
            <div>
              <p className=" dark:text-white font-medium text-md   mb-2">
                Date: {months[month]} {date} {year}
              </p>
              <p className="  font-medium text-lg text-[green] mb-4">
                Account Balance: $18.20
              </p>
            </div>
            <form action="#" className="uppercase">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-12 ">
                  {/* dropdown */}
                  <select className="shadow-sm bg-gray-50 border font-semibold text-sm border-gray-300 text-gray-900 rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-1/2 p-2.5">
                    {options.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="font-semibold "
                      >
                        {option.value}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-12 ">
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
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-1/2 p-2.5"
                    placeholder="******"
                    required=""
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6 mt-6">
                <a className="relative" href="/">
                  <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black dark:bg-gray-500"></span>
                  <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                    SUBMIT
                  </span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isOpen && <ViewPlans onClose={onClose} />}
    </div>
  );
}
