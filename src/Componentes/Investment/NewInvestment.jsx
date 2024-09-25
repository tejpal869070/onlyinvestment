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
import gif1 from "../../assets/photos/growwealthgif.gif";
import VerifyPin from "../VerifyPin";
import { plansData } from "../../assets/Data/GamesData";

export default function NewInvestment() {
  const [isOpen, setIsOpen] = useState(false);
  const [PlansData, setPlansData] = useState([]);
  const [user, setUser] = useState({});
  const [amount, setAmount] = useState(100);
  const [investmentPlan, setInvestmentPlan] = useState();
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [verifyPinPopup, setVerifyPinPop] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const onclose2 = () => {
    setVerifyPinPop(false);
  };

  const successFunction = async (pin) => {
    formData.pin = pin;
    handleForm();
  };

  const formData = {
    amount: amount,
    investmentPlan: investmentPlan,
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

  const handleForm = async () => {
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
    }
    try {
      const response = await MakeNewInvestment(formData);
      if (response.status) {
        setSuccess(true);
        setLoading(false);
        setInvestmentPlan(PlansData[0].id);
        userDataGet();
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
      <div class="   flex flex-col items-center justify-center  ">
        <div class="pt-5 bg-gray-900" id="pricing">
          <div class="mx-auto pb-20 mt-4 max-w-7xl  lg:px-8">
            <div class="mx-auto max-w-4xl text-center">
              <h1 class="text-base font-semibold leading-7 text-indigo-400">
                Our Plans
              </h1>
              <p class="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Grow Your Money With Our Plans.
              </p>
            </div>

            <div class="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {plansData.map((item, index) => (
                <div class="ring-1 ring-white/10 rounded-3xl p-4 xl:p-4 hover:ring-2 hover:ring-indigo-500">
                  <div class="flex items-center justify-between gap-x-4">
                    <h2
                      id="product1"
                      class="text-lg font-semibold leading-8 text-white"
                    >
                      {item.planName}
                    </h2>
                  </div> 
                  <p class="mt-6 flex items-baseline gap-x-1">
                    <span class="text-3xl font-bold tracking-tight text-white">
                    ₹ {item.dailyIncome} / day
                    </span>
                    <span class="text-sm font-semibold leading-6 text-gray-300"></span>
                  </p>
                  <a
                    href="/order"
                    aria-describedby="product1"
                    class="bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Buy At {item.price}
                  </a>
                  <ul class="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                    <li class="flex gap-x-3 text-md text-[#68f168]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-6 w-5 flex-none text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Total Income ₹{item.totalIncome}
                    </li>
                    <li class="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-6 w-5 flex-none text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      1 feature
                    </li>
                    <li class="flex gap-x-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        class="h-6 w-5 flex-none text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      Fast delivery
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isOpen && <ViewPlans onClose={onClose} />}
      {verifyPinPopup && (
        <VerifyPin
          onclose2={onclose2}
          successFunction={(pin) => successFunction(pin)}
        />
      )}
      <ToastContainer />
    </div>
  );
}

// bg-white/5 ring-2 ring-indigo-500 rounded-3xl p-8 xl:p-10
// ring-1 ring-white/10 rounded-3xl p-8 xl:p-10
{
  /* <div class="bg-white/5 ring-2 ring-indigo-500 rounded-3xl p-8 xl:p-10">
                <div class="flex items-baseline justify-between gap-x-4">
                  <h2
                    id="product2"
                    class="text-lg font-semibold leading-8 text-white"
                  >
                    Product Type 2
                  </h2>
                  <p class="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Most popular
                  </p>
                </div>
                <p class="mt-4 text-sm leading-6 text-gray-300">
                  The most popular choice. Product details for Product Type 2
                </p>
                <p class="mt-6 flex items-baseline gap-x-1">
                  <span class="text-4xl font-bold tracking-tight text-white">
                    € 20 / unit
                  </span>
                  <span class="text-sm font-semibold leading-6 text-gray-300"></span>
                </p>
                <a
                  href="/order"
                  aria-describedby="product2"
                  class="bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Order Now
                </a>
                <ul class="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                  <li class="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-6 w-5 flex-none text-white"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    120 units
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-6 w-5 flex-none text-white"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    3 different features
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="h-6 w-5 flex-none text-white"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Fast delivery
                  </li>
                </ul>
              </div> */
}
