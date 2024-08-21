import React, { useState } from "react";
import Timer from "../GamesComponent/Timer";
import NumberColor from "../GamesComponent/NumberColor";
import ColorGameHistory from "../GamesComponent/ColorGameHistory";
import ColorGameChart from "../GamesComponent/ColorGameChart";
import ColorGameMyHistory from "../GamesComponent/ColorGameMyHistory";
import bg1 from "../../assets/photos/bg1.png";
import ColorGamePopup from "../GamesComponent/ColorGamePopup";

export default function ColorGame() {
  const [selectedHistoryTab, setSelectedHistoryTab] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <p className="text-center text-xl font-bold w-full   pb-2">Color Play</p>
      <div
        className="flex bg-no-repeat bg-cover px-4 justify-between w-full border-b-2 border-gray pb-2"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="py-2">
          <p className="text-sm font-semibold">Number</p>
          <p className="font-bold">2020216546554</p>
        </div>
        <div>
          <Timer />
        </div>
      </div>

      <div className="bg-gradient-to-r from-rose-100 to-teal-100 py-4">
        {/* color buttons */}
        <div className="flex gap-6 justify-center py-2 border-b-2 border-white">
          {Array(3)
            .fill()
            .map((item, index) => (
              <div
                key={index}
                onClick={openPopup}
                className={`px-8 cursor-pointer  hover:shadow-lg rounded-lg py-3 ${
                  index === 0
                    ? "bg-[#2ab51d]"
                    : index === 1
                    ? "bg-[#6655d3]"
                    : "bg-[#de2925]"
                }`}
              >
                <button className="text-2xl font-bold text-white">
                  {index === 0 ? "Green" : index === 1 ? "Violet" : "Red"}
                </button>
              </div>
            ))}
        </div>

        {/* color numbers */}
        <NumberColor />

        {/* big small */}
        <div className="flex justify-center my-4 big-small-buttons">
          <button className="btn1 w-52 h-12 shadow-xl" onClick={openPopup}>
            BIG
          </button>
          <button className="btn2 w-52 h-12 shadow-xl" onClick={openPopup}>
            SMALL
          </button>
        </div>
      </div>

      {/* history */}
      <div className="flex gap-4 justify-between color-game-history mt-10">
        <button
          className={`${
            selectedHistoryTab === 1 ? "bg-[#ff9600]" : "bg-[#babbbb]"
          }`}
          onClick={() => setSelectedHistoryTab(1)}
        >
          Game History
        </button>
        <button
          className={`${
            selectedHistoryTab === 2 ? "bg-[#ff9600]" : "bg-[#babbbb]"
          }`}
          onClick={() => setSelectedHistoryTab(2)}
        >
          Chart
        </button>
        <button
          className={`${
            selectedHistoryTab === 3 ? "bg-[#ff9600]" : "bg-[#babbbb]"
          }`}
          onClick={() => setSelectedHistoryTab(3)}
        >
          My History
        </button>
      </div>

      {/* history tabs */}
      <div className="border-2 border-gray-400 mt-2 rounded-lg p-1">
        {selectedHistoryTab === 1 ? (
          <ColorGameHistory />
        ) : selectedHistoryTab === 2 ? (
          <ColorGameChart />
        ) : (
          <ColorGameMyHistory />
        )}
      </div>

      {/* popup */}
      <ColorGamePopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}
