import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaWallet, FaGoogleWallet } from "react-icons/fa";
import { PiHandWithdrawFill } from "react-icons/pi";
import { FaMoneyBills } from "react-icons/fa6";
import { GiWallet, GiMoneyStack } from "react-icons/gi";
import Hero1 from "./Hero1";
import GamesSlider from "./GamesSlider";

const data = [
  {
    id: 1,
    title: "Direct Members Count",
    value: "13",
    icons: <BsFillPeopleFill size={20} />,
  },
  {
    id: 2,
    title: "My Investment",
    value: "₹2460",
    icons: <FaWallet size={20} />,
  },
  {
    id: 3,
    title: "Total Withdrawal",
    value: "₹5102",
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
    value: "₹8400",
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
    value: "₹11,500",
    icons: <PiHandWithdrawFill size={24} />,
  },
];

export default function Dashboard() {
  return (
    <div>
      <Hero1/>
      <GamesSlider/>
       
    </div>
  );
}
