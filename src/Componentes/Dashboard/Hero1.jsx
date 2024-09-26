import React, { useEffect, useState } from "react";
import { BiSolidWallet } from "react-icons/bi";
import { FcMoneyTransfer } from "react-icons/fc";
import SocialShare from "../Account/SocialShare";
import { Link } from "react-router-dom";
import { GetUserDetails } from "../../Controllers/User/UserController";
import { Loading1 } from "../Loading1";
import { HiUsers } from "react-icons/hi";
import { GiReceiveMoney } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";

export default function Hero1() {
  const [showShare, setShowShare] = useState(false);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  const openSocialShare = () => {
    setShowShare(true);
  };

  const closeSocialShare = () => {
    setShowShare(false);
  };

  const userDataGet = async () => {
    const response = await GetUserDetails();
    if (response !== null) {
      setUserData(response[0]);
      localStorage.setItem("userDetails", JSON.stringify(response[0]));
      setLoading(false);
    }
  };

  useEffect(() => {
    userDataGet();
  }, []);

  if (loading) {
    return (
      <div className="absolute inset-0 bg-[#1c1c1cc4] z-[99999]  w-screen h-screen flex items-center justify-center m-auto inset-0">
        <Loading1 />
      </div>
    );
  }

  return (
    <div className="pb-6">
      <div className="grid grid-cols-12 gap-4 w-full">
        <div className="col-span-12 md:col-span-6   border-2  border-[#92a0fd] dark:border-gray-200 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-gray-400 dark:[background-size:0px_0px]   rounded-lg flex justify-between p-4">
          <div>
            <h1 className="text-xl font-bold text-black">
              Welcome {userData && userData.uname}! 🎉
            </h1>
            <p className="text-sm mt-2 text-black">
              Joining: {userData && userData?.date?.split("T")[0]}
            </p>
            <div className="flex gap-2    lg:gap-4 mt-4">
              <div
                className="relative cursor-pointer"
                onClick={openSocialShare}
              >
                <div class="inline-flex overflow-hidden text-white bg-gray-900 rounded group">
                  <span class="px-3.5 py-2 text-white bg-purple-500 group-hover:bg-purple-600 flex items-center justify-center">
                    <HiUsers size={24} />
                  </span>
                  <span class="pl-4 pr-5 py-2.5">Referral</span>
                </div>
              </div>

              <Link
                className="relative cursor-pointer"
                to={{
                  pathname: "/home",
                  search: `?investment=new-investment`,
                }}
              >
                <div class="inline-flex overflow-hidden text-white bg-gray-900 rounded group">
                  <span class="px-3.5 py-2 text-white bg-purple-500 group-hover:bg-purple-600 flex items-center justify-center">
                    <TbMoneybag size={24} />
                  </span>
                  <span class="pl-4 pr-5 py-2.5">Investment</span>
                </div>
              </Link>
            </div>
          </div>
          <div></div>
        </div>

        <div className="col-span-12 md:col-span-6   h-60 w-full   rounded-lg">
          <div className="grid grid-cols-12 gap-4 w-full">
            <div className="col-span-12 md:col-span-12   rounded-lg shadow-[2px_2px_3px_4px_#bee3f8] p-4">
              <BiSolidWallet size={24} color="#1867fd" />
              <p className="font-bold dark:text-gray-300">Total Balance</p>
              <p className="text-2xl font-bold text-black dark:text-gray-300 mb-4">
                ₹{userData.wallet_balance}
              </p>
              <div className="flex flex-wrap justify-between">
                <Link
                  className="relative cursor-pointer mt-6"
                  to={{ pathname: "/home", search: `?money=withdrawal` }}
                >
                  <div class="inline-flex overflow-hidden text-white bg-indigo-400 rounded group">
                    <span class="px-3.5 py-2 text-white bg-purple-600 group-hover:bg-purple-600 flex items-center justify-center">
                      <FcMoneyTransfer size={24} />
                    </span>
                    <span class="pl-4 pr-5 py-2.5">Withdraw</span>
                  </div>
                </Link>
                <Link
                  className="relative cursor-pointer mt-6"
                  to={{
                    pathname: "/home",
                    search: `?money=withdrawal-history`,
                  }}
                >
                  <div class="inline-flex overflow-hidden text-white bg-indigo-400 rounded group">
                    <span class="px-3.5 py-2 text-white bg-purple-600 group-hover:bg-purple-600 flex items-center justify-center">
                      <FcMoneyTransfer size={24} />
                    </span>
                    <span class="pl-4 pr-5 py-2.5">History</span>
                  </div>
                </Link>
                <Link
                  className="relative cursor-pointer mt-6"
                  to={{
                    pathname: "/home",
                    search: "?money=usdt-deposit",
                  }}
                >
                  <div class="inline-flex overflow-hidden text-white bg-indigo-400 rounded group">
                    <span class="px-3.5 py-2 text-white bg-purple-600 group-hover:bg-purple-600 flex items-center justify-center">
                      <GiReceiveMoney size={24} />
                    </span>
                    <span class="pl-4 pr-5 py-2.5">Deposit</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* <div className="col-span-12 md:col-span-12 xl:col-span-6 rounded-lg shadow-[2px_2px_3px_4px_#bee3f8] p-4">
              <MdGeneratingTokens size={26} color="#92a0fd" />
              <p className="font-bold dark:text-gray-300">
                {userData.currency} Value
              </p>
              <p className="text-2xl font-bold text-black dark:text-gray-300">
                {(
                  userData.wallet_balance / Number(userData.currency_rate)
                ).toFixed(2)}
              </p>
            </div> */}
          </div>
        </div>
      </div>
      {showShare && (
        <SocialShare
          url={`${window.location.origin}/register?referrer_code=${userData.reffer_code}`}
          onClose={closeSocialShare}
        />
      )}
    </div>
  );
}
