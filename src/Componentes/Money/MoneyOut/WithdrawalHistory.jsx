import React, { useCallback, useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { GetUserPaymentHistory } from "../../../Controllers/User/UserController";
import { Loading1 } from "../../Loading1";
import gif1 from "../../../assets/photos/giff5.gif";
import { useLocation } from "react-router-dom";
import DateSelector from "../../Income/DateSelector";
import { MdCancel } from "react-icons/md";
import DepositHistory from "../MoneyIn/DepositHistory";

export default function WithdrawalHistory() {
  const classes1 = "flex justify-between border-b border-gray-400";

  const [isVisible, setIsVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [singleData, setSingleData] = useState();
  const [historyType, setHistoryType] = useState(0);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [filteredData, setFilteredData] = useState([]);

  const location = useLocation();

  const GetPaymentHistory = async () => {
    const response = await GetUserPaymentHistory();
    if (response !== null) {
      setData(
        response.reverse().filter((item) => item.payment_type === "Withdrawal")
      );
      setLoading(false);
    } else {
      setData([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    GetPaymentHistory();
  }, []);

  const showModal = useCallback(
    (index) => {
      setIsVisible((pre) => !pre);
      setSelectedIndex(index);
    },
    [setIsVisible, setSelectedIndex]
  );

  useEffect(() => {
    const start = new URLSearchParams(location.search).get("from");
    const end = new URLSearchParams(location.search).get("to");
    setStartDate(start);
    setEndDate(end);
  }, [location]);

  useEffect(() => {
    // Create a new date object for the endDate and set it to the end of the day
    const endDateObj = new Date(endDate);
    endDateObj.setHours(23, 59, 59, 999);

    if (startDate === null || endDate === null) {
      setFilteredData(data);
    } else {
      // Filter data between startDate and endDate
      const filteredData = data.filter((item) => {
        const itemDate = new Date(item.date);
        const startDateObj = new Date(startDate);
        return itemDate >= startDateObj && itemDate <= endDateObj;
      });
      setFilteredData(filteredData);
    }
  }, [startDate, endDate, data]);

  if (loading) {
    return (
      <div>
        <Loading1 />
      </div>
    );
  }

  return (
    <div className="relative">
      <div className=" ">
        <div class="flex h-12 justify-center gap-x-6 dark:text-white">
          <button
            onClick={() => setHistoryType(0)}
            className={`group flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50  justify-center ring-none rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white  border-b-4 hover:border-0 active:border-0 hover:border-2 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base dark:bg-gray-700 dark:border-gray-700 dark:border-b-gray-900 ${
              historyType === 0 ? "bg-violet-500 text-white" : "text-gray-800"
            }`}
          >
            Withdraw History
          </button>
          <button
            onClick={() => setHistoryType(1)}
            className={`group flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50  justify-center ring-none rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  border-b-violet-700 disabled:border-0 disabled:bg-violet-500 disabled:text-white ring-white  border-b-4 hover:border-0 active:border-0 hover:border-2 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base dark:bg-gray-700 dark:border-gray-700 dark:border-b-gray-900 ${
              historyType ===1  ? "bg-violet-500 text-white" : "text-gray-800"
            }`}
          >
            <span class="ml-3">Deposit History</span>
          </button>
        </div>

        <div className="mt-4">
          {historyType === 0 ? (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              {filteredData && filteredData.length === 0 ? (
                <div>
                  <img alt="no data" src={gif1} className="m-auto" />
                  <p className="text-center dark:text-gray-200 font-bold text-xl">
                    No Recoard !
                  </p>
                </div>
              ) : (
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs font-semibold text-gray-200 uppercase bg-indigo-500 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-4 py-3">
                        S.No.
                      </th>
                      <th scope="col" className="px-6 py-3">
                        AMOUNT
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        DATE
                      </th>
                      <th scope="col" className="px-6 py-3">
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  {filteredData.length === 0 ? (
                    <tbody>
                      <tr>
                        <td colspan="8" className="text-center p-4">
                          No Records Found!
                        </td>
                      </tr>
                    </tbody>
                  ) : (
                    filteredData.map((item, index) => (
                      <tbody key={index}>
                        <tr
                          className={` text-black font-semibold dark:text-gray-200  border-b dark:border-gray-700 ${
                            index % 2 === 0
                              ? "bg-white dark:bg-gray-900"
                              : "bg-indigo-200 dark:bg-gray-800"
                          }`}
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {index + 1}.
                          </th>
                          <td className="px-4 py-4">₹{item.amount}</td>
                          <td className="px-6 py-4">{item.status}</td>
                          <td className="px-6 py-4">
                            {item.date.split("T")[0]}
                          </td>
                          <td className="px-6 py-4">
                            <FaRegEye
                              size={20}
                              className="cursor-pointer"
                              onClick={() => {
                                showModal(index);
                                setSingleData(item);
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    ))
                  )}
                </table>
              )}
            </div>
          ) : (
            <DepositHistory/>
          )}
        </div>
      </div>

      {/* Withdrawal Details */}
      {isVisible && (
        <div className="animate-fade-down animate-duration-500 fixed top-0 left-0 w-full h-full flex justify-center pt-10  bg-gray-400 bg-opacity-50 z-[9999]">
          <div className=" text-gray-800 rounded h-[70vh] bg-gradient-to-r from-blue-200 to-cyan-200 p-10 inline-block">
            <MdCancel
              size={30}
              onClick={() => setIsVisible(false)}
              className="cursor-pointer mb-8 flex justify-center m-auto"
            />
            <h1 className="text-center text-2xl font-bold ">
              WITHDRAWAL STATEMENT
            </h1>
            <div className="flex flex-col mt-6 gap-2">
              <div className={`${classes1}`}>
                <p>Amount :</p>
                <p>{singleData.amount}</p>
              </div>

              <div className={`${classes1}`}>
                <p>Status :</p>
                <p>{singleData.status}</p>
              </div>

              <div className={`${classes1}`}>
                <p>Account Holder :</p>
                <p>{singleData.uac_holder_name}</p>
              </div>

              <div className={`${classes1}`}>
                <p>Bank Name :</p>
                <p>{singleData.ubank_details}</p>
              </div>

              <div className={`${classes1}`}>
                <p>Account No. :</p>
                <p>{singleData.uac_no}</p>
              </div>

              <div className={`${classes1}`}>
                <p>IFSC Code :</p>
                <p>{singleData.uifsc_code}</p>
              </div>

              <div className={`${classes1}`}>
                <p>Date :</p>
                <p>{singleData.date.split("T")[0]}</p>
              </div>
              <div className={`${classes1}`}>
                <p>Time :</p>
                <p>{singleData.date.split("T")[1]}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
