import React, { useState } from "react";
import { Link } from "react-router-dom";
import bg1 from "../../assets/photos/stadium.jpg";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import { IoEyeOff } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { Loading1 } from "../../Componentes/Loading1";
import { userLogin } from "../../Controllers/Auth/AuthController";

export default function Login() {
  const [creating, setCreating] = useState(false);
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const ShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const userData = {
    mobile: mobile,
    password: password,
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setCreating(true);
    if (mobile === "" || mobile.length < 10) {
      toast.error("Mobile number required", {
        position: "top-center",
      });
      setCreating(false);
      return;
    } else if (password.length < 6) {
      toast.error("Please enter a valid password", {
        position: "top-center",
      });
      setCreating(false);
      return;
    }
    try {
      const response = await userLogin(userData);
      if (response.status) {
        Cookies.set("token", response.token);
        Cookies.set("mobile", response.mobile);
        toast.success("Login Successfull", {
          position: "top-center",
        });
        setCreating(false);
        setTimeout(function () {
          window.location.href = "/home";
        }, 1000);
      } else {
        toast.error("Mobile Or Password is wrong.", {
          position: "top-center",
        });
        setCreating(false);
        return;
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("Invalid Credentials");
        setCreating(false);
        return;
      }
      toast.error("Server Error !", {
        position: "top-center",
      });
      setCreating(false);
    }
  };

  return (
    <div class="flex h-screen bg-indigo-700">
      <div class="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
        <header>
          <img
            class="w-20 mx-auto mb-5"
            src="https://img.icons8.com/fluent/344/year-of-tiger.png"
            alt="imagagga"
          />
        </header>
        <form onSubmit={handleLogin}>
          <div>
            <label class="block mb-2 text-indigo-500" for="username">
              Mobile
            </label>
            <input
              class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div>
            <label class="block mb-2 text-indigo-500" for="password">
              Password
            </label>
            <div className="flex ">
              <input
                class="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
              />
              {showPassword ? (
                <FaEye
                  className="mt-3 ml-[-25px] cursor-pointer"
                  onClick={ShowPassword}
                />
              ) : (
                <IoEyeOff
                  className="mt-3 ml-[-25px] cursor-pointer"
                  onClick={ShowPassword}
                />
              )}
            </div>
          </div>
          <div>
            <button
              class="w-full cursor-pointer bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
              type="submit"
            >
              {creating ? "Processing..." : "LOGIN"}
            </button>
          </div>
        </form>
        <footer>
          <Link
            class="text-indigo-700 hover:text-pink-700 text-sm float-left"
            to={"/forget-password"}
          >
            Forgot Password?
          </Link>
          <Link
            class="text-indigo-700 hover:text-pink-700 text-sm float-right"
            to={"/register"}
          >
            Create Account
          </Link>
        </footer>
      </div>
      <ToastContainer />
    </div>
  );
}
