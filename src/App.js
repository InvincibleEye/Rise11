// src/App.js
import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import ClaimForm from "./components/ClaimForm";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <Sidebar />
      <div className="flex-1 p-4">
        <Header />
        <div className="p-6 rounded-[25px] bg-gray-100 min-h-[100vh]">
          <ProgressBar />
          <ClaimForm />
        </div>
      </div>
    </div>
  );
};

export default App;
