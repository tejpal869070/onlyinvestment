import React, { useEffect, useState } from "react";
import Timer from "../GamesComponent/Timer";
import NumberColor from "../GamesComponent/NumberColor";
import ColorGameHistory from "../GamesComponent/ColorGameHistory";
import ColorGameChart from "../GamesComponent/ColorGameChart";
import ColorGameMyHistory from "../GamesComponent/ColorGameMyHistory";
import bg1 from "../../assets/photos/bg1.png";
import ColorGamePopup from "../GamesComponent/ColorGamePopup";
import { ColorGameNumbers } from "../../Controllers/User/GamesController";
import swal from "sweetalert";

export default function ColorGameTime({ gameType }) {
  const [selectedHistoryTab, setSelectedHistoryTab] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [numbersData, setNumbersData] = useState([]);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  useEffect(() => {
    const getNumbersData = async () => {
      try {
        const response = await ColorGameNumbers(gameType);
        setNumbersData(response.data);
      } catch (error) {
        swal({
          title: "Error!",
          text: "Something Went Wrong",
          icon: "error",
          buttons: {
            confirm: "OK",
          },
          dangerMode: true,
        }).then((willRedirect) => {
          if (willRedirect) {
            window.location.href = "/home";
          }
        });
      }
    };
    getNumbersData();
  }, [gameType]);

  return (
    <div>
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

      <div className="bg-gradient-to-r from-rose-100 to-teal-100 dark:bg-gradient-to-r dark:from-slate-500 dark:to-slate-800 py-4">
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
        <NumberColor numbersData={numbersData} />
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
