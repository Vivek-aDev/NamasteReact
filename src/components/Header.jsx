import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/food_icon.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import { LiaShoppingCartSolid } from "react-icons/lia";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-gray-800 text-white shadow-lg">
      <div className="logo-container mb-4 md:mb-0">
        <img className="w-24 md:w-36" src={Logo} alt="app logo" />
      </div>
      <div className="nav-items mb-4 md:mb-0">
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <li className="flex items-center">
            <span className="mr-2">Online Status:</span>
            {onlineStatus === false ? (
              <span className="text-red-500">💔</span>
            ) : (
              <span className="text-green-500">💚</span>
            )}
          </li>
          <li>
            <Link
              className="hover:text-yellow-400 transition duration-300"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-yellow-400 transition duration-300"
              to="/about"
            >
              About us
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-yellow-400 transition duration-300"
              to="/grocery"
            >
              Grocery
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-yellow-400 transition duration-300"
              to="/contact"
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
      <div className="btn-container flex items-center space-x-4">
        <p className="flex items-center font-bold">
          <LiaShoppingCartSolid className="size-8 mr-2" />
          Cart
        </p>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded transition duration-300"
          onClick={() => {
            setBtnName(btnName === "login" ? "logout" : "login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
