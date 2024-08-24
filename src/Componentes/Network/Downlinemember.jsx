import React from "react";

const data = [
  {
    username: "TARUN SONI",
    color: "Silver",
    phone: "8690708320",
    position: "LEFT",
    joining: "10-05-2023",
    paidType: "UNPAID",
    totalInvest: "$1000",
    firstInveDate: "15-16-2024",
    category: "Laptop",
    price: "$2999",
  },
  {
    username: "SUDHANSHU",
    color: "White",
    phone: "8690708320",
    position: "RIGHT",
    joining: "10-05-2023",
    paidType: "PAID",
    totalInvest: "$1000",
    firstInveDate: "15-16-2024",
    category: "Laptop PC",
    price: "$1999",
  },
];

export default function Downlinemember() {
  return (
    <div>
      <h1 className="mb-4 font-bold text-lg dark:text-white">Downline Member</h1>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs font-semibold text-black uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                S.No.
              </th>
              <th scope="col" class="px-6 py-3">
                USERNAME
              </th>
              <th scope="col" class="px-6 py-3">
                PHONE
              </th>
              <th scope="col" class="px-6 py-3">
                POSITION
              </th>
              <th scope="col" class="px-6 py-3">
                JOINING
              </th>
              <th scope="col" class="px-6 py-3">
                PAID/UNPAID
              </th>
              <th scope="col" class="px-6 py-3">
                TOTAL INVST
              </th>
              <th scope="col" class="px-6 py-3">
                FIRST INVST. DATE
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
                  class="odd:bg-white text-black font-semibold odd:dark:bg-gray-900 dark:text-gray-300 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}.
                  </th>
                  <td class="px-6 py-4">{item.username}</td>
                  <td class="px-6 py-4">{item.phone}</td>
                  <td class="px-6 py-4">{item.position}</td>
                  <td class="px-6 py-4">{item.joining}</td>
                  <td class="px-6 py-4">{item.paidType}</td>
                  <td class="px-6 py-4">{item.totalInvest}</td>
                  <td class="px-6 py-4">{item.firstInveDate}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}
