import React, { useEffect, useState } from "react";
import ViewPlans from "./ViewPlans";
import {
  GetInvestmentPlans,
  GetUserDetails,
  MakeNewInvestment,
} from "../../Controllers/User/UserController";
import { ToastContainer, toast } from "react-toastify";
import { Loading1 } from "../Loading1";
import successImg from "../../assets/photos/giff6.gif";
import gif1 from "../../assets/photos/growwealthgif.gif";
import VerifyPin from "../VerifyPin";
import { Link } from "react-router-dom";

export default function NewInvestment() {
  const [isOpen, setIsOpen] = useState(false);
  const [PlansData, setPlansData] = useState([]);
  const [user, setUser] = useState({});
  const [amount, setAmount] = useState(100);
  const [investmentPlan, setInvestmentPlan] = useState();
  const [pin, setPin] = useState("");
  const [isCresting, setCreating] = useState(false);
  const [success, setSuccess] = useState(false);

  const [verifyPinPopup, setVerifyPinPop] = useState(false);
  const [loading, setLoading] = useState(true);

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
    id: investmentPlan,
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
      setLoading(false);
    } else {
      setPlansData([]);
    }
  };

  const handleForm = async () => {
    setCreating(true);
    if (investmentPlan < 0) {
      toast.error("Invalid investment plan", {
        position: "top-center",
      });
      setCreating(false);
      return;
    } else if (amount > user && user.wallet_balance) {
      toast.error("Insufficient balance", {
        position: "top-center",
      });
      setCreating(false);
      return;
    } else if (amount < 100) {
      toast.error("Minimum Amount is Rs.100", {
        position: "top-center",
      });
      setCreating(false);
      return;
    }
    try {
      const response = await MakeNewInvestment(formData);
      if (response.status) {
        setSuccess(true);
        setCreating(false);
        userDataGet();
        setAmount(100);
        setPin("");
        setTimeout(() => {
          setSuccess(false);
        }, 3500);
      } else {
        toast.error(response.response.data.message, {
          position: "top-center",
        });
        setCreating(false);
      }
    } catch (error) {
      if (error.response.status === 302) {
        toast.error(error.response.data.message);
        setCreating(false);
      } else {
        toast.error("Something Went Wrong. Server Error !");
        setCreating(false);
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
      <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center   z-[9999]">
        <img alt="success" src={successImg} className="w-60" />
        <p className="text-2xl text-white font-semibold">Investment Success.</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-[9999]">
        <Loading1 />
      </div>
    );
  }

  return (
    <div>
      <div class="   flex flex-col items-center justify-center  ">
        <div class="pt-5   w-full" id="pricing">
          <div class="  pb-20 mt-4  w-full lg:px-8">
            <div class="mx-auto relative max-w-4xl text-center">
              <p class="mt-2 text-gray-900 text-4xl font-bold tracking-tight   sm:text-5xl ">
                Grow Your Money With Our Plans.
              </p>
              <div className="flex rounded-full w-60 m-auto mt-4 bg-gradient-to-tr from-red-400 via-orange-400 to-rose-400 p-1 shadow-lg">
                <Link
                  to={{
                    pathname: "/home",
                    search: `?investment=investment-history`,
                  }}
                  class="flex-1 font-bold text-xl bg-white px-6 py-1 rounded-full"
                >
                  My Investment
                </Link>
              </div>
            </div>

            <div class="isolate px-2 lg:px-0 mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {PlansData.map((item, index) => (
                <div class="ring-1 bg-gray-500 ring-white/10 rounded-3xl p-4 xl:p-4 hover:ring-2 hover:ring-indigo-500">
                  <div className="flex w-full items-center flex-row justify-between lg:flex-col">
                    <div class="flex items-center justify-between gap-x-4">
                      <h2
                        id="product1"
                        class="text-lg font-semibold leading-8 text-white"
                      >
                        {item.plan_name}
                      </h2>
                    </div>
                    <p class="lg:mt-6 flex items-baseline gap-x-1">
                      <span class="text-3xl font-bold tracking-tight text-white">
                        ₹ {item.per_day_income} / day
                      </span>
                      <span class="text-sm font-semibold leading-6 text-gray-300"></span>
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setVerifyPinPop(true);
                      setInvestmentPlan(item.id);
                    }}
                    class="w-full bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    Buy At ₹{item.price}
                  </button>
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
                      Total Income ₹{item.total_income}
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
                      {item.days} Days Income
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
