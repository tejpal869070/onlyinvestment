import React from "react";
import TableComponent from "../TableComponent";
import DateSelector from "./DateSelector";

export default function MatchingIncome() {
  const tableData = [
     
    {
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: "$99",
      action: "More",
    },
    {
      name: "Google Pixel Phone",
      color: "Gray",
      category: "Phone",
      price: "$799",
      action: "More",
    },
    {
      name: "Apple Watch 5",
      color: "Red",
      category: "Wearables",
      price: "$999",
      action: "More",
    },
  ];

  const tableHead = [
    "S.No.",
    "Product name",
    "Color",
    "Category",
    "Price",
    "Action",
  ];
  return (
    <div>
      <p className="font-bold text-xl mb-6">Income Manager {">"}Matching Income</p>
      <DateSelector/>
      <TableComponent tableData={tableData} tableHead={tableHead} />
    </div>
  );
}
