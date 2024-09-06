import React, { useCallback, useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { MyInvestMentHistory } from "../../Controllers/User/UserController";
import { Loading1 } from "../Loading1";

export default function InvestmentHistory() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  function getEndDate(initialDate, days) {
    const date = new Date(initialDate);
    date.setDate(date.getDate() + days);
    return date.toISOString().split('T')[0];
  }

   

  const GetHistory = async () => {
    const response = await MyInvestMentHistory();
    if (response !== null) {
      setData(response);
      setLoading(false);
    } else {
      setData([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    GetHistory();
  }, []);

  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-[9999]">
        <Loading1 />
      </div>
    );
  }

  return (
    <div className="relative">
      <div className=" ">
        <div>
          <h1 className="mb-6 font-bold text-lg dark:text-white">
            Investment {">"}Investment History
          </h1>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs font-semibold text-black uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    S.No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    INVESTMENT
                  </th>
                  <th scope="col" className="px-6 py-3">
                    TYPE
                  </th>
                  <th scope="col" className="px-6 py-3">
                    CLAIM TIME
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    DATE START
                  </th>
                  <th scope="col" className="px-6 py-3">
                    DATE END
                  </th>
                </tr>
              </thead>
              {data && data.length === 0 ? (
                <tbody>
                  <tr>
                    <td colspan="8" className="text-center p-4">
                      No Records Found!
                    </td>
                  </tr>
                </tbody>
              ) : (
                data.map((item, index) => (
                  <tbody key={index}>
                    <tr className="odd:bg-white text-black font-semibold odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 dark:text-gray-300">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 dark:text-gray-100 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}.
                      </th>
                      <td className="px-4 py-4">{item.amount}</td>
                      <td className="px-4 py-4">{item.plan_name}</td>
                      <td className="px-6 py-4">
                        {item.times} {item.title}
                      </td>
                      <td className="px-6 py-4">{item.status}</td>
                      <td className="px-6 py-4">{item.date.split("T")[0]}</td>
                      <td className="px-6 py-4">
                        {getEndDate(item.date, Number(item.times))}
                      </td>
                    </tr>
                  </tbody>
                ))
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
