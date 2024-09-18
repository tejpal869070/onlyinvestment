import React, { useEffect, useState } from "react";
import { GetGameTypes } from "../../Controllers/User/GamesController";
import swal from "sweetalert";
import { API } from "../../Controllers/Api";
import { Link } from "react-router-dom";

export default function ColorGame() {
  const [gameTypes, setGameTypes] = useState([]);

  const fetchGameTypes = async () => {
    try {
      const data = await GetGameTypes();
      setGameTypes(data.data);
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

  useEffect(() => {
    fetchGameTypes();
  }, []);

  return (
    <div>
      <div class="flex flex-wrap gap-6 mb-4">
        <button class="relative" href="#">
          <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
          <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
            Exchange Wallet Money
          </span>
        </button>
        <p class="relative" href="#">
          <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100  hover:text-gray-900">
            Game Wallet Balance : ₹400
          </span>
        </p>
        <p class="relative" href="#">
          <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100  hover:text-gray-900">
            Main Wallet Balance : ₹1650
          </span>
        </p>
      </div>

      <div class="grid grid-cols-1 xl:grid-cols-4 gap-9 px-4 py-3 border border-2 mt-6">
        {gameTypes &&
          gameTypes.map((item, index) => (
            <Link
              key={index}
              className="w-40 h-40 bg-gray-300 rounded-xl flex flex-col "
              to={{
                pathname: "/home",
                search: `?colorGameType=${item.id}`,
              }}
            >
              <img alt={item.name} src={`${API.gametype_hostURL}${item.img}`} />
            </Link>
          ))}
      </div>
    </div>
  );
}
