import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { MdCancel } from "react-icons/md";
import { GetInvestmentPlans } from "../../Controllers/User/UserController";
import { Loading1 } from "../Loading1";

const ViewPlans = ({ url, onClose }) => {
  const [amount, setAmount] = useState(1000);
  const [PlansData, setPlansData] = useState([]);
  const [loading, setLoading] = useState(true);

  const GetAllPlans = async () => {
    const response = await GetInvestmentPlans();
    if (response !== null) {
      setPlansData(response);
      setLoading(false);
    } else {
      setPlansData([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    GetAllPlans();
  }, []);

  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-[9999]">
        <Loading1/>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-[9999]">
      <div className="  flex items-center justify-center">
        <div className="bg-gray-100 w-full mx-4 p-4 rounded-xl animate-fade-down animate-once animate-duration-500">
          <div className="flex justify-between items center border-b border-gray-200 py-3">
            <div className="flex items-center justify-center">
              <p className="text-xl font-bold text-gray-800">OUR PLANS</p>
            </div>

            <div
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-500 cursor-pointer hover:text-gray-300 font-sans text-gray-500 w-8 h-8 flex items-center justify-center rounded-full"
            >
              <MdCancel size={20} />
            </div>
          </div>
          <p className=" mt-4 pl-8 font-medium">Calculate your returns.</p>
          <input
            className="w-1/2 border-2 border-gray-400 rounded-lg ml-8 p-2 focus:border-gray-400"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {/* plans */}
          <div className="grid lg:grid-cols-4 px-8 gap-6 text-zinc-800 mt-10">
            {PlansData &&
              PlansData.map((item, index) => (
                <div className="flex flex-col items-center   p-8 px-4 rounded-lg shadow-lg relative border-4 border-orange-200 max-w-sm">
                  <p className="mono text-sm absolute -top-4 bg-red-400 text-zinc-100 py-0.5 px-2 font-bold tracking-wider rounded">
                    {item.plan_name}
                  </p>
                  <div>
                    <div className="flex gap-4 justify-center mb-4">
                      <p className="font-bold text-gray-700 text-xl mb-2">
                        ₹{((amount * item.percentage) / 100).toFixed(0)}/
                        {item.plan_name}
                      </p>
                    </div>

                    <p className="opacity-60 text-center"></p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="flex items-center text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <b>{item.times} {item.title} Payout</b>
                    </p>
                    <p className="flex items-center text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <b>25 Keywords</b>
                    </p>
                    <p className="flex items-center text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <b>250 Accounts Tracking</b>
                    </p>

                    <div className="flex justify-center mt-8">
                      <button className="px-4 py-2 border-violet-400 border-4 hover:bg-violet-100 rounded-xl">
                        Total Return:{" "}
                        {(
                          ((amount * item.percentage) / 100) *
                          item.times
                        ).toFixed(2)}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ViewPlans;
