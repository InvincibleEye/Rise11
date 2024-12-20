// src/components/ProgressBar.js
import React from "react";

const ProgressBar = () => {
  const steps = ["Preliminary", "Your Details", "KYC", "Parties", "Claim", "Review", "Payment"];
  const currentStep = 3; // Dynamically set current step.

  return (
    <div className="flex items-center w-full px-8 py-4 space-x-4 ml-[20px]">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center w-full">
          {/* Step Indicator */}
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full border-4 ${
                index < currentStep
                  ? "bg-blue-500 border-blue-500 text-white"
                  : index === currentStep
                  ? "bg-white border-blue-500 text-blue-500 shadow-md"
                  : "bg-gray-300 border-gray-300 text-gray-500"
              }`}
            >
              {index + 1}
            </div>
            <p
              className={`mt-2 text-sm font-medium ${
                index <= currentStep ? "text-blue-500" : "text-gray-500"
              }`}
            >
              {step}
            </p>
          </div>

          {/* Connector Line */}
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-1 mx-2 rounded-full ${
                index < currentStep ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
