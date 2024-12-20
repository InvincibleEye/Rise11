import React from "react";
import MyImage from "./logo.png"
import justice from './Justice.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBriefcase, faCalendar, faFolder, faExclamation, faHeartPulse, faHandFist } from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  { name: "Dashboard", icon: faHome },
  { name: "My Cases", icon: faBriefcase },
  { name: "Activities", icon: faHeartPulse },
  { name: "Calendar", icon: faCalendar },
  { name: "Files", icon: faFolder },
  { name: "Open a Dispute", icon: faHandFist },
];

export default function Sidebar() {
  return (
    <div className="bg-white w-full lg:w-1/6 min-h-screen p-5 fixed lg:relative left-0 top-0 z-50">
      <div className="flex flex-col items-center">
        <span className="flex item-center space-x-1 relative left-[-45px] top-[-10px]"> 
          <img src={MyImage} className="h-16 w-16 mt-2"/>
          <h1 className="text-2xl font-bold mb-8 mt-6">Jur</h1>
        </span>

        <ul className="w-full">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="flex items-center py-3 px-4 mb-2 rounded-lg cursor-pointer hover:bg-blue-200"
            >
              <FontAwesomeIcon icon={item.icon} className="h-5 w-5 text-blue-300" />
              <span className="ml-5 text-gray-500">{item.name}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <div className="p-4 rounded-lg " style={{ backgroundColor: 'rgb(165, 207, 255)' }}>
            <h2 className="font-bold">Get Justice on every Claim</h2>
            <img src={justice} alt="Justice Image" className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
