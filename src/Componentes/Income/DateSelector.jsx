import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DateSelector() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleStartDate = (e) => {
    const params = new URLSearchParams(location.search);
    params.set("from", e.target.value);
    navigate(`${location.pathname}?${params.toString()}`);
  };

  const handleEndDate = (e) => {
    const params = new URLSearchParams(location.search);
    params.set("to", e.target.value);
    navigate(`${location.pathname}?${params.toString()}`);
  }; 

  // const handleSearch = async () => {
  //   const todayDate = new Date();
  //   const year = todayDate.getFullYear();
  //   const month = String(todayDate.getMonth() + 1).padStart(2, "0");
  //   const day = String(todayDate.getDate()).padStart(2, "0");

  //   // Format as YYYY-MM-DD
  //   const formattedDate = `${year}-${month}-${day}`;

  //   const StartDate = new URLSearchParams(location.search).get("from");
  //   const EndDate = new URLSearchParams(location.search).get("to");

  //   // Check if dates are provided
  //   if (!StartDate || !EndDate) {
  //     toast.error("Please select both start and end dates");
  //     return;
  //   }

  //   // Convert date strings to Date objects for comparison
  //   const startDateObj = new Date(StartDate);
  //   const endDateObj = new Date(EndDate);
  //   const todayDateObj = new Date(formattedDate);

  //   // Validate date ranges
  //   if (endDateObj > todayDateObj) {
  //     toast.error("End date cannot be in the future.");
  //     return;
  //   } else if (startDateObj > endDateObj) {
  //     toast.error("Start date cannot be after end date.");
  //     return;
  //   }

  //   window.alert("ok");
  // };

  return (
    <div className="mb-4">
      <div className="flex items-center gap-1">
        <p  className="dark:text-gray-200">From</p>
        <input
          aria-label="Date"
          placeholder="Start Date"
          type="date"
          className="border-2 border-[#ff9600] rounded py-1"
          onChange={handleStartDate}
        />
        <p  className="dark:text-gray-200">to</p>
        <input
          aria-label="Date"
          placeholder="Start Date"
          type="date"
          className="border-2 border-[#ff9600] rounded py-1"
          onChange={handleEndDate}
        />
        {/* <button className="relative ml-6" onClick={handleSearch}>
          <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black dark:bg-gray-400"></span>
          <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black dark:border-gray-500 bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
            SEARCH
          </span>
        </button> */}
      </div>
      <ToastContainer />
    </div>
  );
}
