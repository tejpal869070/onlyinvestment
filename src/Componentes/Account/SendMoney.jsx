import React, { useEffect, useState } from "react";
import { GetUserDetails } from "../../Controllers/User/UserController";
import {
  GetUserNameByMobile,
  SendMoneyToUser,
} from "../../Controllers/Auth/AuthController";
import { Loading1 } from "../Loading1";
import { ToastContainer, toast } from "react-toastify";
import swal from "sweetalert";

export default function SendMoney() {
  const [sendTo, setSendTo] = useState("");
  const [mobile, setMobile] = useState("");
  const [amount, setAmount] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userVerified, setUserVerified] = useState(false);
  const [checking, setChecking] = useState(false);
  const [user, setUser] = useState(null);

  const formData = {
    userMobile: mobile,
    amount: amount,
    pin: pin,
  };

  const userDataGet = async () => {
    const response = await GetUserDetails();
    if (response !== null) {
      setUser(response[0]);
    }
  };

  const verifyMobile = async (e) => {
    e.preventDefault();
    setChecking(true);
    if (mobile.length < 10) {
      toast.error("Invalid User Mobile.");
      setChecking(false);
      return;
    }
    try {
      const response = await GetUserNameByMobile(mobile);
      if (response.status) {
        setSendTo(response.data.username);
        setUserVerified(true);
        setChecking(false);
      } else {
        toast.error("User Not Found");
        setChecking(false);
      }
    } catch (error) {
      if (error.response.status === 302) {
        toast.error("User Not Found");
        setChecking(false);
      } else {
        toast.error("Server Error. Please try again.");
        setChecking(false);
      }
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (amount < 100) {
      toast.error("Minimum amount is 100");
      setLoading(false);
      return;
    } else if (amount > Number(user.wallet_balance)) {
      toast.error("Insufficient Balance");
      setLoading(false);
      return;
    } else if (pin.length !== 4) {
      toast.error("Invalid PIN");
      setLoading(false);
      return;
    }
    try {
      const response = await SendMoneyToUser(formData);
      if (response.status) {
        swal("Success!", "Transection Success!", "success");
        setAmount("");
        setPin("");
        setMobile("");
        setUserVerified(false);
        setSendTo("");
        setLoading(false);
        userDataGet()
      } else {
        toast.error("Failed to send money");
        setLoading(false);
      }
    } catch (error) {
      if (error?.response?.status === 302) {
        toast.error(error.response.data.message);
        setLoading(false);
      } else {
        toast.error("Server Error.");
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    userDataGet();
  }, []);

  return (
    <div>
      <div>
        <p className="lg:pl-10 font-bold text-xl mb-6 dark:text-white">
          Account {">"}Send Money
        </p>
        <div className="bg-white dark:bg-black border border-4 dark:border-gray-300 rounded-lg shadow relative lg:mx-10  ">
          <div className="p-6 space-y-6">
            <p className="  font-medium text-lg text-[green] mb-4">
              Account Balance: ${user && user.wallet_balance}
            </p>
            <form onSubmit={handleForm} className="uppercase">
              <div className="grid grid-cols-1 gap-6">
                <div className="col-span-12 sm:col-span-3">
                  <label
                    for="product-name"
                    className="text-sm font-medium text-gray-900 dark:text-white block mb-2"
                  >
                    Client Mobile No.:
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      name="product-name"
                      id="product-name"
                      disabled={userVerified}
                      className="shadow-sm bg-gray-50 border w-[40%] border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block  p-2.5"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      required=""
                    />
                    <button
                      onClick={verifyMobile}
                      disabled={userVerified}
                      className="px-6 py-1 w-[10%] rounded-xl font-semibold bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
                    >
                      {checking ? <Loading1 width={28} /> : "VERIFY"}
                    </button>
                  </div>
                  <p className="italic text-[green] font-semibold text-sm">
                    {sendTo && sendTo}
                  </p>
                </div>

                <div className="col-span-12 sm:col-span-3">
                  <label
                    for="product-details"
                    className="text-sm font-medium text-gray-900 dark:text-white block mb-2"
                  >
                    Amount To be Transferred :
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    disabled={!userVerified}
                    className="shadow-sm bg-gray-50 border w-1/2 border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block  p-2.5"
                    placeholder="AMOUNT"
                    required=""
                  />
                </div>
                <div className="col-span-12 sm:col-span-3">
                  <label
                    for="product-details"
                    className="text-sm font-medium text-gray-900 dark:text-white block mb-2"
                  >
                    Security Code *
                  </label>
                  <input
                    type="password"
                    disabled={!userVerified}
                    name="price"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    id="price"
                    className="shadow-sm bg-gray-50 border w-1/2 border-gray-300 dark:bg-gray-400 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block  p-2.5"
                    placeholder="******"
                    required=""
                  />
                </div>
              </div>

              <div className="flex     gap-6 mt-6">
                <button
                  className="relative"
                  type="submit"
                  disabled={!userVerified}
                >
                  <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black dark:bg-gray-400"></span>
                  <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black dark:border-gray-500 bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                    {loading ? <Loading1 width={28} /> : "SEND"}
                  </span>
                </button>
                <button
                  className="relative"
                  onClick={() => {
                    setAmount("");
                    setPin("");
                    setMobile("");
                    setUserVerified(false);
                    setSendTo("");
                  }}
                >
                  <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black dark:bg-gray-400"></span>
                  <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black dark:border-gray-500 bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                    CLEAR
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
