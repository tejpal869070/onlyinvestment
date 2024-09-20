import React, { useState, useEffect } from "react";

export default function Timer({ gameEndTime, refresh }) {
  const [minLeft, setMinLeft] = useState("00");
  const [secLeft, setSecLeft] = useState("00");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const endTime = new Date(gameEndTime);
      const timeLeft = endTime - currentTime;
      if (timeLeft > 0) {
        const seconds = Math.floor((timeLeft / 1000) % 60);
        const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
        const formattedMinutes = String(minutes).padStart(2, "0");
        const formattedSeconds = String(seconds).padStart(2, "0");
        setMinLeft(formattedMinutes);
        setSecLeft(formattedSeconds);
      } else {
        refresh();
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [gameEndTime]);

  return (
    <div className="mt-2  ">
      <div className="border-4 border-black rounded-lg px-4 py-1 inline-block bg-gray-100 shadow-lg">
        <h1 className="font-semibold ">Time Remaining</h1>
        <h2 className="text-center font-bold text-4xl">
          {minLeft}:{secLeft}
        </h2>
      </div>
    </div>
  );
}
