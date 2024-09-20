import React, { useState } from "react";
import ColorGamePopup from "./ColorGamePopup";

export default function NumberColor({ numbersData }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="  pt-4 border-b-2 border-white">
      <div className="grid grid-cols-5 grid-rows-2 gap-4 lg:px-10">
        {numbersData &&
          numbersData.map((item, index) => (
            <ColorCircle
              key={item.id}
              number={item.number}
              orders={item.orders}
            />
            // <div
            //   key={item.id}
            //   className="w-24 h-24 bg-gray-400 mb-4 flex justify-center items-center rounded-full  "
            //   onClick={openPopup}
            // >
            //   <div className="w-20 h-20 rounded-full bg-white m-auto flex justify-center items-center">
            //     <p className="text-2xl font-bold ">{item.number}</p>
            //   </div>
            // </div>
          ))}
      </div>
      <ColorGamePopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}

const ColorCircle = ({ orders, number }) => {
  const colors = orders.map((order) => order.color_code);
  const colorCount = colors.length;

  const circleNumberStyle = "text-4xl font-bold text-gray-200  ";

  return (
    <div className="relative h-24 w-24 rounded-full p-1 border-2 border-dotted border-black dark:border-gray-400 overflow-hidden">
      {colorCount === 1 ? (
        <div
          className="h-full w-full rounded-full flex justify-center items-center"
          style={{ background: colors[0] }}
        >
          <p className={circleNumberStyle}>{number}</p>
        </div>
      ) : colorCount > 1 ? (
        <div
          className="w-full h-full rounded-full"
          style={{ background: colors[0] }}
        > 
          <div
            className="absolute h-[90%] rounded-r-full w-[48%] right-1"
            style={{ background: colors[1] }}
          />
          <p
            className={`absolute h-full text-center flex justify-center items-center w-full m-auto inset-0 ${circleNumberStyle}`}
          >
            {number}
          </p>
        </div>
      ) : (
        <div className="h-full w-full bg-transparent" />
      )}
    </div>
  );
};
//
