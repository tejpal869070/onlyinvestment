import React, { useState } from "react";
import img0 from "../../assets/photos/0.png";
import img1 from "../../assets/photos/1.png";
import img2 from "../../assets/photos/2.png";
import img3 from "../../assets/photos/3.png";
import img4 from "../../assets/photos/4.png";
import img5 from "../../assets/photos/5.png";
import img6 from "../../assets/photos/6.png";
import img7 from "../../assets/photos/7.png";
import img8 from "../../assets/photos/8.png";
import img9 from "../../assets/photos/9.png";
import ColorGamePopup from "./ColorGamePopup";

export default function NumberColor() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  const data = [
    { id: 1, img: img0 },
    { id: 2, img: img1 },
    { id: 3, img: img2 },
    { id: 4, img: img3 },
    { id: 5, img: img4 },
    { id: 6, img: img5 },
    { id: 7, img: img6 },
    { id: 8, img: img7 },
    { id: 9, img: img8 },
    { id: 0, img: img9 },
  ];
  return (
    <div className="  pt-4 border-b-2 border-white">
      <div className="flex flex-wrap  justify-center   lg:px-10">
        {data.map((item, index) => (
          <div key={item.id} className="w-[20%] mb-4">
            <img
              src={item.img}
              alt={item.id}
              className="w-20 h-20 m-auto cursor-pointer"
              onClick={openPopup}
            />
          </div>
        ))}
      </div>
      <ColorGamePopup isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}
