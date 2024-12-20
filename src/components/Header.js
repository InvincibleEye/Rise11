// src/components/Header.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-4 px-8 bg-white ">
      <h1 className="text-xl font-bold"></h1>
      <div className="flex items-center space-x-4">
        <button className="p-2 text-blue-400">
          <FontAwesomeIcon icon={faBell} />
        </button>
        <button className="p-2 text-blue-400">
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </div>
  );
};

export default Header;
