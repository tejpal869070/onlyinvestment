import React, { useCallback, useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { GetUserPaymentHistory } from "../../../Controllers/User/UserController";
import { Loading1 } from "../../Loading1";
import gif1 from "../../../assets/photos/nodatagif.gif";
import { useLocation } from "react-router-dom";
import DateSelector from "../../Income/DateSelector";

export default function WithdrawalHistory() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [filteredData, setFilteredData] = useState([]);

  const location = useLocation();

  const GetPaymentHistory = async () => {
    const response = await GetUserPaymentHistory();
    if (response !== null) {
      setData(response.filter((item) => item.payment_type === "Withdrawal"));
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
        <div>
          <h1 className="mb-6 font-bold text-lg">
            Money In {">"}Withdrawal History
          </h1>
          <DateSelector />
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
                <thead className="text-xs font-semibold text-black uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
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
                            : "bg-gray-200 dark:bg-gray-800"
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
                        <td className="px-6 py-4">{item.date.split("T")[0]}</td>
                        <td className="px-6 py-4">
                          <FaRegEye
                            size={20}
                            className="cursor-pointer"
                            onClick={() => showModal(index)}
                          />
                        </td>
                      </tr>
                      {isVisible && selectedIndex === index ? (
                        <tr>
                          <td colspan="7" className="text-center p-4">
                            No Records Found!
                          </td>
                        </tr>
                      ) : (
                        ""
                      )}
                    </tbody>
                  ))
                )}
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
