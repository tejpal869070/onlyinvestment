import React from "react";
import { Link } from "react-router-dom";
import bg1 from "../../assets/photos/stadium.jpg";

export default function Login() {
  const handleLogin = async () => {
    window.location.href = "/home";
  };
  return (
    <div
      className="min-h-screen  bg-fixed  bg-no-repeat bg-cover bg-black     py-6 flex flex-col justify-center sm:py-12"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg1})`,
      }}
    >
      <div className="relative py-3   sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Login</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autocomplete="off"
                    id="email"
                    name="email"
                    type="text"
                    className="peer  h-10 w-full border-b-2 border-0 border-gray-300 text-gray-900 focus:border-b-2 focus:border-gray-500 focus:outline-none"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative">
                  <input
                    autocomplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer  h-10 w-full border-b-2 border-0 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                </div>
                <div className="relative ">
                  <button
                    class="relative mt-4 w-full"
                    onClick={handleLogin}
                  >
                    <span class="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
                    <span class="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                      LOGIN
                    </span>
                  </button>
                </div>
                <p className="text-sm">
                  Don't have an account?{" "}
                  <Link to={"/register"}>Register Now</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
