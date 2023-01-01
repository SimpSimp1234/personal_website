import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuData } from "./NavData";
import { IconContext } from "react-icons";
import "./Menu.css";

function Nav() {
  const [menu, setMenu] = useState(false);

  const showMenu = () => setMenu(!menu);

  return (
    <>
      <header className="w-screen fixed h-36 p-20 flex items-center justify-between text-white">
        <Link to={"/"}>
          <div className="text-xl font-light draw-icon-in-future">JS</div>
        </Link>

        <div className="flex items-center space-x-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
          <button className="relative group" onClick={showMenu}>
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-12 h-12 transform transition-all ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
                <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

                <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                  <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                  <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </header>
      <IconContext.Provider value={{ color: "undefined" }}>
        <nav className={menu ? "nav-menu active" : "nav-menu"}>
          <ol onClick={showMenu}>
            {MenuData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Nav;
