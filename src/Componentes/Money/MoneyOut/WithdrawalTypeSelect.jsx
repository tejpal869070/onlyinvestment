import React from "react";
import { Link } from "react-router-dom";

export default function WithdrawalTypeSelect() {
  return (
    <div className="lg:pl-10 my-4 mt-10">
      <div className="flex flex-wrap   gap-6 mt-6">
        <Link
          to={{
            pathname: "/home",
            search: "?money=withdrawal&withdrawalType=bank",
          }}
          className="relative"
          href="/"
        >
          <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black dark:bg-gray-300"></span>
          <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black dark:border-gray-700 bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
            BANK
          </span>
        </Link>
        <Link
          to={{
            pathname: "/home",
            search: "?money=withdrawal&withdrawalType=crypto",
          }}
          className="relative"
          href="/"
        >
          <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black dark:bg-gray-300"></span>
          <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black dark:border-gray-700 bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
            CRYPTO
          </span>
        </Link>
      </div>
    </div>
  );
}
