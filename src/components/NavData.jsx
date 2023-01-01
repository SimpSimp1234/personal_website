import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";

export const MenuData = [
  {
    title: "HOME",
    path: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
    cName: "nav-text",
  },
  {
    title: "PROJECT",
    path: "/project",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "ABOUT",
    path: "/about",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "CONTACT",
    path: "/contact",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
];
