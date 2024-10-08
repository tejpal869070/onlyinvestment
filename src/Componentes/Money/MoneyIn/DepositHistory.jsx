import React, { useEffect, useState } from "react";
import { GetUserPaymentHistory } from "../../../Controllers/User/UserController";
import { FaEye } from "react-icons/fa";
import { Loading1 } from "../../Loading1";
import gif1 from "../../../assets/photos/giff5.gif";
import DateSelector from "../../Income/DateSelector";
import { useLocation } from "react-router-dom";

export default function DepositHistory() {
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState();
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [filteredData, setFilteredData] = useState([]);

  const location = useLocation();

  const GetPaymentHistory = async () => {
    const response = await GetUserPaymentHistory();
    if (response !== null) {
      setData(
        response.reverse().filter((item) => item.payment_type === "Deposit")
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
    <div className=" ">
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          {filteredData && filteredData.length === 0 ? (
            <div>
              <img alt="no data" src={gif1} className="m-auto" />
              <p className="text-center font-bold text-xl">No Recoard !</p>
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
                    Transaction Hash
                  </th>
                  <th scope="col" className="px-6 py-3">
                    TYPE
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date
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
                filteredData &&
                filteredData.map((item, index) => (
                  <tbody>
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
                      <td className="px-4 py-4">{item.amount}</td>
                      <td className="px-6 py-4">{item.transaction_id}</td>
                      <td className="px-6 py-4">{item.type}</td>
                      <td className="px-6 py-4">{item.status}</td>
                      <td className="px-6 py-4">{item.date.split("T")[0]}</td>
                    </tr>
                    {/* {visible && selectedIndex === index ? (
                      <tr className=" bg-gray-300 dark:bg-black animate-fade-down animate-duration-500">
                        {item.type === "UPI" ? (
                          <td colSpan="8 ">
                            <div className="p-6 text-black font-medium dark:text-gray-200   ">
                              <p>Transaction ID: {item.transaction_id}</p>
                              <p>Amount: {item.amount}</p>
                              <p>Date: {item.date.split("T")[0]}</p>
                              <p>Transfered To: {item.upi_id}</p>
                              <p>Status: {item.status}</p>
                            </div>
                          </td>
                        ) : item.type === "Bank" ? (
                          <td colSpan="8">
                            <div className="p-6 text-black font-medium dark:text-gray-200   border-gray-700">
                              <p>Transaction ID: {item.transaction_id}</p>
                              <p>Amount: {item.amount}</p>
                              <p>Date: {item.date.split("T")[0]}</p>
                              <p>Transfered To: </p>
                              <div>
                                <p>Account Holder: {item.ac_holder_name}</p>
                                <p>Account No.: {item.ac_no}</p>
                                <p>Bank Name: {item.bank_name}</p>
                                <p>IFSC: {item.ifsc_code}</p>
                              </div>
                              <p>Status: {item.status}</p>
                            </div>
                          </td>
                        ) : (
                          ""
                        )}
                      </tr>
                    ) : (
                      ""
                    )} */}
                  </tbody>
                ))
              )}
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
