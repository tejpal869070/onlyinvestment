import React, { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (time === 0) {
        clearInterval(intervalId);
        setTime(60);
        return;
      }
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [time]);

  return (
    <div className="mt-2  ">
      <div className="border-4 border-black rounded-lg px-4 py-1 inline-block bg-gray-100 shadow-lg">
        <h1 className="font-semibold ">Time Remaining</h1>
        <h2 className="text-center font-bold text-4xl">{time}</h2>
      </div>
    </div>
  );
}
