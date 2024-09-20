import React, { useCallback, useEffect, useState } from "react";
import Timer from "../GamesComponent/Timer";
import NumberColor from "../GamesComponent/NumberColor";
import ColorGameHistory from "../GamesComponent/ColorGameHistory";
import ColorGameChart from "../GamesComponent/ColorGameChart";
import ColorGameMyHistory from "../GamesComponent/ColorGameMyHistory";
import bg1 from "../../assets/photos/bg1.png";
import ColorGamePopup from "../GamesComponent/ColorGamePopup";
import {
  ColorGameAllResult,
  ColorGameColors,
  ColorGameCurrentData,
  ColorGameNumbers,
} from "../../Controllers/User/GamesController";
import swal from "sweetalert";
import { Loading1 } from "../Loading1";
import { GiLaurelsTrophy } from "react-icons/gi";
import FlipCountdown from "@rumess/react-flip-countdown";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function ColorGameTime({ gameType }) {
  const [selectedHistoryTab, setSelectedHistoryTab] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [numbersData, setNumbersData] = useState([]);
  const [colorsData, setColorsData] = useState([]);
  const [currentGameData, setCurrentGameData] = useState();
  const [currentGameLoading, setCurrentGameLoading] = useState();
  const [gameEndTime, setGameEndTime] = useState();
  const [gameHistory, setGameHistory] = useState([]);
  const [gameHistoryLoading, setGameHistoryLoading] = useState(true);

  const [isCountDown, setIsCountDown] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [numbersResponse, colorsResponse] = await Promise.all([
          ColorGameNumbers(gameType),
          ColorGameColors(gameType),
        ]);
        setNumbersData(numbersResponse.data);
        setColorsData(colorsResponse.data);
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
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [gameType]);

  const currentData = useCallback(async () => {
    setCurrentGameLoading(true);
    try {
      const response = await ColorGameCurrentData(gameType);
      setCurrentGameData(response.data[0]);
      setGameEndTime(response.data[0].end_date);
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
    } finally {
      setCurrentGameLoading(false);
    }
  }, [gameType]);

  useEffect(() => {
    currentData();
  }, [currentData]);

  const refresh = () => {
    currentData();
    setIsCountDown(false);
  };

  useEffect(() => {
    if (!gameEndTime || !currentGameData?.coundown) return;

    const utcGameEndTime = new Date(gameEndTime).getTime();
    const beforeTime = new Date(
      utcGameEndTime - Number(currentGameData.coundown) * 1000
    );

    const checkCountdown = () => {
      const currentTime = new Date().getTime();
      if (currentTime >= beforeTime.getTime()) {
        setIsCountDown(true);
      }
    };
    checkCountdown();
    const intervalId = setInterval(checkCountdown, 1000); // Check every second

    return () => clearInterval(intervalId);
  }, [gameEndTime, currentGameData]);

  const getGameHistory = async (gameType) => {
    try {
      const response = await ColorGameAllResult(gameType);
      if (response.status) {
        setGameHistory(response.data);
        setGameHistoryLoading(false);
      } else {
        window.location.reload();
      }
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
          window.location.reload();
        }
      });
    }
  };

  useEffect(() => {
    getGameHistory(gameType);
  }, [gameType]);

  if (loading || currentGameLoading || gameHistoryLoading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-[9999]">
        <Loading1 />
      </div>
    );
  }

  return (
    <div>
      <Link
        className="cursor-pointer   "
        to={{ pathname: "", search: "?game=color-game" }}
      >
        <IoHome size={24} className="" />
      </Link>
      <div
        className="flex bg-no-repeat bg-cover px-4 justify-between w-full border-b-2 border-gray pb-2"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="py-2 flex gap-4">
          <GiLaurelsTrophy className="h-12 w-12" />
          <div>
            {" "}
            <p className="text-sm font-semibold">Period</p>
            <p className="font-bold">
              {currentGameData && currentGameData.period}
            </p>
          </div>
        </div>
        <div>
          <Timer
            gameEndTime={gameEndTime}
            refresh={refresh}
            CountDown={currentGameData?.coundown}
          />
        </div>
      </div>

      <div className="relative bg-gradient-to-r from-rose-100 to-teal-100 dark:bg-gradient-to-r dark:from-slate-500 dark:to-slate-800 py-4">
        {/* color buttons */}
        <div className="flex gap-12 justify-center py-2 border-b-2 border-white">
          {colorsData &&
            colorsData.map((item, index) => (
              <div
                key={index}
                onClick={openPopup}
                className={`px-8 cursor-pointer  hover:shadow-lg rounded-lg py-3  `}
                style={{ backgroundColor: item.color_code }}
              >
                <button className="text-2xl font-bold text-white">
                  {item.color_name}
                </button>
              </div>
            ))}
        </div>

        {/* color numbers */}
        <NumberColor numbersData={numbersData} />

        {isCountDown && (
          <div className="absolute w-full h-full top-0 bg-[#000000c9] flex justify-center items-center">
            <FlipCountdown
              size="large"
              hideYear
              hideMonth
              hideDay
              hideHour
              endAt={gameEndTime} // Date/Time
              onTimeUp={() => getGameHistory(gameType)}
            />
          </div>
        )}
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
          <ColorGameHistory gameHistory={gameHistory} />
        ) : selectedHistoryTab === 2 ? (
          <ColorGameChart />
        ) : (
          <ColorGameMyHistory gameType={gameType}/>
        )}
      </div>

      {/* popup */}
      <ColorGamePopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}
