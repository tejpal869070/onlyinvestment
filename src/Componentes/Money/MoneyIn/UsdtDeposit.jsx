import React from "react";
import qrcode from "../../../assets/photos/deposit-qr.png";
import { FaCopy } from "react-icons/fa";

export default function UsdtDeposit() {
  return (
    <div>
      <div className=" ">
        <p className="font-bold text-xl">Money In {">"} USDT Deposit </p>
        <div className="w-full p-2 border-2 border-black mt-6 py-4 border-b-4 rounded-lg shadow-lg m-auto flex flex-col">
          <h1 className="text-center font-semibold text-lg">
            TRC20 USDT ADDRESS
          </h1>
          <p className="text-center font-semibold flex  justify-center align-center items-center gap-2  bg-[#ff9600] px-4 mt-2 py-1 inline m-auto rounded-lg ">
            TGw3xDnEoc7xycSvLDM2k4KiPrpyHpTZws{" "}
            <FaCopy className="cursor-pointer  " />
          </p>
          <h1 className="text-center font-semibold text-lg text-[#426D98] mt-4">
            OR SCAN
          </h1>
          <img alt="qr-code" src={qrcode} className="h-60 w-60 m-auto mt-4" />

          <div className="font-medium border-t-2 mt-6 border-black">
            <p className="text-[red] mt-2 font-semibold">Note:</p>
            <p>1. Minimum Deposit $10.00</p>
            <p>
              2. After complete the transaction amount will be credited in your
              account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
