import React, { useEffect, useState } from "react";
import ViewPlans from "./ViewPlans";
import {
  GetInvestmentPlans,
  GetUserDetails,
  MakeNewInvestment,
} from "../../Controllers/User/UserController";
import { ToastContainer, toast } from "react-toastify";
import { Loading1 } from "../Loading1";
import successImg from "../../assets/photos/success1-1--unscreen.gif";

export default function NewInvestment() {
  const [isOpen, setIsOpen] = useState(false);
  const [PlansData, setPlansData] = useState([]);
  const [user, setUser] = useState({});
  const [amount, setAmount] = useState(100);
  const [investmentPlan, setInvestmentPlan] = useState();
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const formData = {
    amount: amount,
    investmentPlan: investmentPlan,
    pin: pin,
  };

  const userDataGet = async () => {
    const response = await GetUserDetails();
    if (response !== null) {
      setUser(response[0]);
    }
  };

  const GetAllPlans = async () => {
    const response = await GetInvestmentPlans();
    if (response !== null) {
      setPlansData(response);
      setInvestmentPlan(response[0].id);
    } else {
      setPlansData([]);
    }
  };

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (investmentPlan < 0) {
      toast.error("Invalid investment plan");
      setLoading(false);
      return;
    } else if (amount > user && user.wallet_balance) {
      toast.error("Insufficient balance");
      setLoading(false);
      return;
    } else if (amount < 100) {
      toast.error("Minimum Amount is Rs.100");
      setLoading(false);
      return;
    } else if (pin.length !== 4) {
      toast.error("Invalid Pin");
      setLoading(false);
      return;
    }
    try {
      const response = await MakeNewInvestment(formData);
      if (response.status) {
        setSuccess(true);
        setLoading(false);
        setInvestmentPlan(PlansData[0].id);
        setAmount(100);
        setPin("");
        setTimeout(() => {
          setSuccess(false);
        }, 3500);
      } else {
        toast.error(response.response.data.message);
        setLoading(false);
      }
    } catch (error) {
      if (error.response.status === 302) {
        toast.error(error.response.data.message);
        setLoading(false);
      } else {
        toast.error("Something Went Wrong. Server Error !");
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    GetAllPlans();
  }, []);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  useEffect(() => {
    userDataGet();
  }, []);

  if (success) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-[#000000d1] bg-opacity-50 z-[9999]">
        <img alt="success" src={successImg} />
        <p className="text-2xl text-white font-semibold">Investment Success.</p>
      </div>
    );
  }

  return (
    <div>
      <div>
        <p className="lg:pl-10 font-bold dark:text-white text-xl mb-6">
          Investment {">"}New Investment
        </p>
        <div className="ml-10 mb-4">
          <button
            onClick={() => setIsOpen(true)}
            className="animate-bounce shadow-xl focus:animate-none   inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white"
          >
            <span className="ml-2">View Plans 🏀</span>
          </button>
        </div>
        <div className="bg-white dark:bg-black border border-4 rounded-lg shadow relative lg:mx-10  ">
          <div className="p-6 space-y-6">
            <div>
              <p className=" dark:text-white font-medium text-md   mb-2">
                Date: {months[month]} {date} {year}
              </p>
              <p className="  font-medium text-lg text-[green] mb-4">
                Account Balance: ₹{user && user.wallet_balance}
              </p>
            </div>
            <form onSubmit={handleForm} className="uppercase">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-12 ">
                  {/* dropdown */}
                  <select
                    onChange={(e) => setInvestmentPlan(e.target.value)}
                    defaultChecked={investmentPlan}
                    className="shadow-sm bg-gray-50 border font-semibold text-sm border-gray-300 text-gray-900 rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-1/2 p-2.5"
                  >
                    {PlansData &&
                      PlansData?.map((item, index) => (
                        <option
                          key={index}
                          value={item.id}
                          className="font-semibold cursor-pointer"
                        >
                          {item.plan_name}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="col-span-12 ">
                  <label
                    for="product-details"
                    className="text-sm font-medium text-gray-900 dark:text-white block mb-2"
                  >
                    Amount
                  </label>
                  <input
                    type="number"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-1/2 p-2.5"
                    placeholder=""
                    required=""
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <div className="col-span-12 ">
                  <label
                    for="product-details"
                    className="text-sm font-medium text-gray-900 dark:text-white block mb-2"
                  >
                    Security Code *
                  </label>
                  <input
                    type="password"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    name="price"
                    id="price"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-1/2 p-2.5"
                    placeholder="******"
                    required=""
                  />
                </div>
              </div>

              <div className="flex flex-wrap   gap-6 mt-6">
                <button className="relative" type="submit">
                  <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black dark:bg-gray-500"></span>
                  <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                    {loading ? <Loading1 width={30} /> : "SUBMIT"}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {isOpen && <ViewPlans onClose={onClose} />}
      <ToastContainer />
    </div>
  );
}
