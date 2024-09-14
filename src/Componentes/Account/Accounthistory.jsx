import React, { useCallback, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import AccountHistoryPeriod from "./AccountHistoryPeriod";
import gif1 from "../../assets/photos/nodatagif.gif";

export default function AccountHistory() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const data = [
    
  ];

  const showModal = useCallback(
    (index) => {
      setIsVisible((pre) => !pre);
      setSelectedIndex(index);
    },
    [setIsVisible, setSelectedIndex]
  );

  return (
    <div className="relative">
      <div className=" ">
        <div>
          <h1 className="mb-6 font-bold text-lg dark:text-white ">
            Account {">"}Account History
          </h1>
          <AccountHistoryPeriod />
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
            {data && data.length === 0 ? (
              <div>
                <img alt="no data" src={gif1} className="m-auto" />
                <p className="text-center font-bold text-xl">No Recoard !</p>
              </div>
            ) : (
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs font-semibold text-black uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      S.No.
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Transaction Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Transaction Detail
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Credit
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Debit
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Closing
                    </th>
                  </tr>
                </thead>
                {data.map((item, index) => (
                  <tbody key={index}>
                    <tr className="odd:bg-white text-black font-semibold dark:text-gray-200 odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}.
                      </th>
                      <td className="px-6 py-4">{item.date}</td>
                      <td className="px-4 py-4">{item.transection_id}</td>
                      <td className="px-6 py-4">{item.credit}</td>
                      <td className="px-6 py-4">{item.debit}</td>
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
                ))}
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
