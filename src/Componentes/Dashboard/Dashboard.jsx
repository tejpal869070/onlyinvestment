import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaWallet, FaGoogleWallet } from "react-icons/fa";
import { PiHandWithdrawFill } from "react-icons/pi";
import { FaMoneyBills } from "react-icons/fa6";
import { GiWallet, GiMoneyStack } from "react-icons/gi";

const data = [
  {
    id: 1,
    title: "Direct Members Count",
    value: "0",
    icons: <BsFillPeopleFill size={20} />,
  },
  {
    id: 2,
    title: "My Investment",
    value: "$0",
    icons: <FaWallet size={20} />,
  },
  {
    id: 3,
    title: "Total Withdrawal",
    value: "$0",
    icons: <PiHandWithdrawFill size={24} />,
  },
  {
    id: 4,
    title: "Total Members Downline",
    value: "0",
    icons: <FaGoogleWallet size={22} />,
  },
  {
    id: 5,
    title: "Direct Income",
    value: "$0",
    icons: <FaMoneyBills size={24} />,
  },
  {
    id: 6,
    title: "ROI",
    value: "$0",
    icons: <GiWallet size={24} />,
  },
  {
    id: 7,
    title: "Matching Income",
    value: "$0",
    icons: <GiMoneyStack size={24} />,
  },
  {
    id: 3,
    title: "Total Business",
    value: "$0",
    icons: <PiHandWithdrawFill size={24} />,
  },
];

export default function Dashboard() {
  return (
    <div>
      <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item, index) => (
          <div
            className="p-[3px] bg-gray-400 shadow-lg rounded shadow-4"
            key={index}
          >
            <div class="flex flex-col w-full     p-4 justify-center rounded bg-white h-28 dark:bg-gray-800">
              <div className="w-full flex justify-between">
                {item.icons}
                {index === 7 ? (
                  ""
                ) : (
                  <p className="cursor-pointer font-semibold text-[blue]">
                    View
                  </p>
                )}
              </div>
              <h5 className="text-left  font-semibold mt-4 mb-1">
                {item.title}
              </h5>
              <div className="w-full flex justify-between">
                <p className="font-bold text-2xl">{item.value}</p>
                {index === 7 ? (
                  <p className="text-sm font-semibold text-end">
                    Left:0 | Right:0
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
