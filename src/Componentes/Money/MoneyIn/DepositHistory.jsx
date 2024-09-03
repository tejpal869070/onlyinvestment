import React, { useEffect, useState } from "react";
import { GetUserPaymentHistory } from "../../../Controllers/User/UserController";
import { FaEye } from "react-icons/fa";
import { Loading1 } from "../../Loading1";

export default function DepositHistory() {
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState();
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);

  const GetPaymentHistory = async () => {
    const response = await GetUserPaymentHistory();
    if (response !== null) {
      setData(response.filter((item) => item.payment_type === "Deposit"));
      setLoading(false);
    } else {
      setData([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    GetPaymentHistory();
  }, []);

  if (loading) {
    return (
      <div>
        <Loading1 />
      </div>
    );
  }

  return (
    <div className=" ">
      <div>
        <h1 className="mb-6 font-bold text-lg dark:text-gray-100">
          Money In {">"}Deposit History
        </h1>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs font-semibold text-black uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-4 py-3">
                  S.No.
                </th>
                <th scope="col" className="px-6 py-3">
                  AMOUNT
                </th>
                <th scope="col" className="px-6 py-3">
                  Transaction Hash
                </th>
                <th scope="col" className="px-6 py-3">
                  TYPE
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Added On
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
              data &&
              data.map((item, index) => (
                <tbody>
                  <tr
                    key={index}
                    className="odd:bg-white text-black font-semibold dark:text-gray-200 odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {index + 1}.
                    </th>
                    <td className="px-4 py-4">{item.amount}</td>
                    <td className="px-6 py-4">{item.transaction_id}</td>
                    <td className="px-6 py-4">{item.type}</td>
                    <td className="px-6 py-4">{item.status}</td>
                    <td className="px-6 py-4">
                      <FaEye
                        size={20}
                        className="cursor-pointer"
                        onClick={() => {
                          setSelectedIndex(index);
                          setVisible((pre) => !pre);
                        }}
                      />
                    </td>
                  </tr>
                  {visible && selectedIndex === index ? (
                    <tr className=" bg-gray-300 dark:bg-black animate-fade-down animate-duration-500">
                      {item.type === "UPI" ? (
                        <td colSpan="8 ">
                          <div className="p-6 text-black font-medium dark:text-gray-200   ">
                            <p>Transaction ID: {item.transaction_id}</p>
                            <p>Amount: {item.amount}</p>
                            <p>Date: {item.date.split("T")[0]}</p>
                            <p>Transfered To: {item.upi_id}</p>
                            <p>Status: {item.status}</p>
                          </div>
                        </td>
                      ) : item.type === "Bank" ? (
                        <td colSpan="8">
                          <div className="p-6 text-black font-medium dark:text-gray-200   border-gray-700">
                            <p>Transaction ID: {item.transaction_id}</p>
                            <p>Amount: {item.amount}</p>
                            <p>Date: {item.date.split("T")[0]}</p>
                            <p>Transfered To: </p>
                            <div >
                              <p>Account Holder: {item.ac_holder_name}</p>
                              <p>Account No.: {item.ac_no}</p>
                              <p>Bank Name: {item.bank_name}</p>
                              <p>IFSC: {item.ifsc_code}</p>
                            </div>
                            <p>Status: {item.status}</p>
                          </div>
                        </td>
                      ) : (
                        ""
                      )}
                    </tr>
                  ) : (
                    ""
                  )}
                </tbody>
              ))
            )}
          </table>
        </div>
      </div>
    </div>
  );
}
