import React from "react";
import { FaCircle } from "react-icons/fa";

const data = [
  {
    period: "202401010121",
    number: "4",
    big_small: "Big",
    color: "green",
  },
  {
    period: "202401010122",
    number: "2",
    big_small: "Small",
    color: "red",
  },
  {
    period: "202401010123",
    number: "6",
    big_small: "Big",
    color: "blue",
  },
];

export default function ColorGameHistory() {
  return ( 
    <div>
      <div className="relative overflow-x-auto  z-0">
        <table className="w-full text-[16px] font-semibold text-left rtl:text-right text-black dark:text-gray-400">
          <thead className="text-sm text-black uppercase bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Period
              </th>
              <th scope="col" className="px-6 py-3">
                Number
              </th>
              <th scope="col" className="px-6 py-3">
                Big-Small
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.period}
                </th>
                <td className="px-6 py-4">{item.number}</td>
                <td className="px-6 py-4">{item.big_small}</td>
                <td className="px-6 py-4">
                  <FaCircle color={item.color} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
