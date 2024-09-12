import React from "react";
import { MdCancel } from "react-icons/md";

export default function Details({ onClose, singleData }) {
  const classes1 = "flex justify-between border-b border-gray-400";

  function getEndDate(initialDate, days) {
    const date = new Date(initialDate);
    date.setDate(date.getDate() + days);
    return date.toISOString().split("T")[0];
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center pt-10  bg-gray-400 bg-opacity-50 z-[9999]">
      <div className="text-white bg-black p-10">
        <h1 className="text-center text-2xl font-bold ">INVESTMENT DETAIL</h1>
        <div className="flex flex-col mt-6 gap-2">
          <div className={`${classes1}`}>
            <p>Amount :</p>
            <p>{singleData.amount}</p>
          </div>

          <div className={`${classes1}`}>
            <p>Plan Type :</p>
            <p>{singleData.plan_name}</p>
          </div>

          <div className={`${classes1}`}>
            <p>Status :</p>
            <p>{singleData.status}</p>
          </div>

          <div className={`${classes1}`}>
            <p>Interest Rate :</p>
            <p>{singleData.percentage}%</p>
          </div>

          <div className={`${classes1}`}>
            <p>Approx Return :</p>
            <p>
              {(singleData.amount * singleData.percentage) / 100 +
                Number(singleData.amount)}
            </p>
          </div>

          <div className={`${classes1}`}>
            <p>Start Date :</p>
            <p>{singleData.date.split("T")[0]}</p>
          </div>

          <div className={`${classes1}`}>
            <p>Expire Date :</p>
            <p>{getEndDate(singleData.date, Number(singleData.day_count))}</p>
          </div>

          <div className={`${classes1}`}>
            <p>Duration :</p>
            <p>
              {singleData.times} {singleData.title}
            </p>
          </div>
        </div>
        <MdCancel
          size={30}
          onClick={onClose}
          className="cursor-pointer mt-8 flex justify-center m-auto"
        />
      </div>
    </div>
  );
}
