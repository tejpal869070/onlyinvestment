import React from "react";
import WithdrawalTypeSelect from "./WithdrawalTypeSelect";
import { useLocation } from "react-router-dom";
import BankWithDrawal from "./WithdrawalOption/BankWithDrawal";
import CryptoWithdrawal from "./WithdrawalOption/CryptoWithdrawal";

export default function Withdrawal() {
  const location = useLocation();
  const queries = new URLSearchParams(location.search);
  const withdrawalType = queries.get("withdrawalType");
  return (
    <div>
      <div className="relative z-0">
         
        {/* Select Withdrawal type */}
        {/* <WithdrawalTypeSelect /> */}
        {withdrawalType === "crypto" ? (
          <CryptoWithdrawal />
        ) : (
          <BankWithDrawal />
        )}
      </div>
    </div>
  );
}
