import React, { useCallback, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import AccountHistoryPeriod from "./AccountHistoryPeriod";

export default function AccountHistory() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const data = [
    {
      amount: "40 USDT",
      transection_id:
        "69476ec765b2b67cabba4371dbe0f9ffdc4157d",
      ip: "192.168.1.555",
      type: "CRYPTO",
      status: "COMPLETED",
      paidType: "UNPAID",
      credit: "$1000",
      debit: "",
      date: "15-16-2024",
      category: "Laptop",
      price: "$2999",
    },
    {
      amount: "18 USDT",
      transection_id:
        "97465ec765b2b67cabba436b95a372dc454sdf",
      ip: "192.168.2.457",
      type: "BANK",
      status: "PENDING",
      paidType: "PAID",
      credit: " ",
      debit: "$210",
      date: "15-16-2024",
      category: "Laptop PC",
      price: "$1999",
    },
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
          <h1 className="mb-6 font-bold text-lg">Account {">"}Account History</h1>
          <AccountHistoryPeriod/>
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs font-semibold text-black uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-4 py-3">
                    S.No.
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Transaction Date
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Transaction Detail
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Credit
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Debit
                  </th>
                   
                  <th scope="col" class="px-6 py-3">
                    Closing
                  </th>
                </tr>
              </thead>
              {data.length === 0 ? (
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
                    <tr class="odd:bg-white text-black font-semibold odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {index + 1}.
                      </th>
                      <td class="px-6 py-4">{item.date}</td>
                      <td class="px-4 py-4">{item.transection_id}</td>
                      <td class="px-6 py-4">{item.credit}</td>
                      <td class="px-6 py-4">{item.debit}</td> 
                      <td class="px-6 py-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}
