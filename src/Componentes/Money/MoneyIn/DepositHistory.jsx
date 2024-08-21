import React from "react";

const data = [
  {
    amount: "40 USDT",
    transection_id:
      "69476ec765b2b67cabba4371019280d3013913d8b95a37242dbe0f9ffdc4157d",
    ip: "192.168.1.555",
    position: "LEFT",
    status: "COMPLETED",
    paidType: "UNPAID",
    totalInvest: "$1000",
    firstInveDate: "15-16-2024",
    category: "Laptop",
    price: "$2999",
  },
  {
    amount: "18 USDT",
    transection_id:
      "97465ec765b2b67cabba43654654d3013913d8b95a37242dbe0f9ffdc454sdf",
    ip: "192.168.2.457",
    position: "RIGHT",
    status: "PENDING",
    paidType: "PAID",
    totalInvest: "$1000",
    firstInveDate: "15-16-2024",
    category: "Laptop PC",
    price: "$1999",
  },
];

export default function DepositHistory() {
  return (
    <div className=" ">
      <div>
        <h1 className="mb-6 font-bold text-lg">
          Money In {">"}Deposit History
        </h1>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs font-semibold text-black uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-4 py-3">
                  S.No.
                </th>
                <th scope="col" class="px-6 py-3">
                  AMOUNT
                </th>
                <th scope="col" class="px-6 py-3">
                  Transaction Hash
                </th>
                <th scope="col" class="px-6 py-3">
                  Ip Address
                </th>
                <th scope="col" class="px-6 py-3">
                  Status
                </th>
                <th scope="col" class="px-6 py-3">
                  Added On
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
              <tbody>
                {data.map((item, index) => (
                  <tr
                    key={index}
                    class="odd:bg-white text-black font-semibold odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}.
                    </th>
                    <td class="px-4 py-4">{item.amount}</td>
                    <td class="px-6 py-4">{item.transection_id}</td>
                    <td class="px-6 py-4">{item.ip}</td>
                    <td class="px-6 py-4">{item.status}</td>
                    <td class="px-6 py-4">{item.paidType}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}
