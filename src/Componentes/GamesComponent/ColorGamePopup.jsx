import React, { useState } from "react";

const ColorGamePopup = ({ isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-[#bbbbbb] p-6 rounded-lg   shadow-lg relative">
        <h2 className="text-xl font-bold mb-2 text-center">Color Game </h2>
        <p className="text-center    py-1  font-bold bg-[#ffe487] px-12 rounded-lg">
          Selected 5
        </p>

        {/* Balance */}
        <div className="flex justify-between gap-10 color-game-amount mt-6 items-center">
          <p className="font-semibold">Balance</p>
          <div className="flex gap-2">
            <button>1</button>
            <button>10</button>
            <button>100</button>
            <button>1000</button>
          </div>
        </div>

        {/* quantity */}
        <div className="flex justify-between color-game-quantity gap-10 mt-6 items-center">
          <p className="font-semibold">Quantity</p>
          <div className="flex gap-2 items-center">
            <button
              className="w-8 h-8 rounded-full"
              onClick={() => setQuantity(quantity - 1)}
              disabled={quantity === 1}
            >
              -
            </button>
            <input
              type="number"
              placeholder="10"
              className="w-32 text-center rounded-2xl h-8"
              value={quantity}
            />

            <button
              className="w-8 h-8 rounded-full"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* buttons */}
        <div className="flex   justify-around mt-10">
          <button className="relative" onClick={onClose}>
            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
            <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
              Close
            </span>
          </button>
          <button className="relative">
            <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
            <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
              Place Bet
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorGamePopup;
