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
    <div className="animate-fade-down animate-duration-500 fixed top-0 left-0 w-full h-full flex justify-center pt-10  bg-gray-400 bg-opacity-50 z-[9999]">
      <div className=" text-white bg-gradient-to-r from-violet-500 to-purple-500 h-[70vh]   p-10 inline-block">
      <MdCancel
          size={30}
          onClick={onClose}
          className="cursor-pointer mb-8 flex justify-center m-auto"
        />
        <h1 className="text-center text-2xl font-bold ">INVESTMENT STATEMENT</h1>
        <div className="flex flex-col mt-6 gap-2">
          <div className={`${classes1}`}>
            <p>Plan Name :</p>
            <p>{singleData.plan_name}</p>
          </div>

          <div className={`${classes1}`}>
            <p>Amount :</p>
            <p>{singleData.price}</p>
          </div>

          <div className={`${classes1}`}>
            <p>Status :</p>
            <p>{singleData.status}</p>
          </div>

          <div className={`${classes1}`}>
            <p>Daily Income :</p>
            <p>₹ {singleData.per_day_income}</p>
          </div>

          <div className={`${classes1}`}>
            <p>Duration :</p>
            <p>
              {singleData.days} Days
            </p>
          </div>

          <div className={`${classes1}`}>
            <p>Approx Return :</p>
            <p>
            ₹ {singleData.total_income}
            </p>
          </div>

          <div className={`${classes1}`}>
            <p>Start Date :</p>
            <p>{singleData.date.split("T")[0]}</p>
          </div>

          <div className={`${classes1}`}>
            <p>Expire Date :</p>
            <p>{singleData.expire_date.split("T")[0]}</p>
          </div>

          
        </div>
        
      </div>
    </div>
  );
}
