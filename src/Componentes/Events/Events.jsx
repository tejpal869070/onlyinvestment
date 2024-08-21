import React, { useState } from "react";
import TodayUpcoming from "./CustomTab/TodayUpcoming";
import ballimg from "../../assets/photos/ball4.png";
import ballimg2 from "../../assets/photos/ball3.jpg";
import footballimg from "../../assets/photos/football.webp";

export default function Events({ gameType }) {
  const [selectedButton, setSelectedButton] = useState(1);

  const buttons = [
    { text: "INPLAY", value: 1 },
    { text: "UPCOMING", value: 2 },
  ];

  return (
    <div>
      <p className="uppercase font-bold ">
        <img
          alt="imageer"
          src={
            gameType === "cricket"
              ? ballimg
              : gameType === "football"
              ? footballimg
              : gameType === "tennis"
              ? ballimg2
              : ""
          }
          className="w-8 h-8"
        />
        {gameType}
      </p>
      <div className="  flex gap-4 mt-6 mb-8">
        {buttons.map((item, index) => (
          <button
            class="relative"
            onClick={() => setSelectedButton(item.value)}
          >
            <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
            <span
              class={`${
                selectedButton === index + 1 ? "bg-yellow-400" : "bg-white"
              } fold-bold relative inline-block h-full w-full rounded border-2 border-black  px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900`}
            >
              {item.text}
            </span>
          </button>
        ))}
      </div>
      <div>
        {selectedButton === 1 ? (
          <TodayUpcoming type="inplay" gameType={gameType} />
        ) : selectedButton === 2 ? (
          <TodayUpcoming type="incoming" gameType={gameType} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
