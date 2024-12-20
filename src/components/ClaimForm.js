import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faMapMarkerAlt, faGlobe, faUpload, faFileAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import CalSign from "./ClaimValueLogo.png";
import stateLogo from "./StateLogo.png";
import agreeLogo from './AgreeLogo.png';
import infoLogo from "./InfoLogo.png"

const ClaimForm = () => {
  const [formData, setFormData] = useState({
    contractValue: "",
    claimValue: "",
    place: "",
    language: "",
    statement: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-[25px] shadow-md ml-[20px] minh-[100vh] h-[640px]">

      {/* Step Header */}
      <div className="mb-6 border-b ">
        <h2 className="p-[35px] mb-[-25px] text-xl font-bold flex items-center">  
          File your Claim.   
          <p className="text-sm text-gray-500 mt-2 ml-[10px]">(Approx 5 minutes)</p>
        </h2>
        <div className="w-1/3 h-1 bg-blue-500 mt-2 ml-16"></div>
      </div>

      {/* Claim Value, Place, and Language Section */}
      <div className="mb-6 border-b pb-6">
        <div className="grid grid-cols-3 gap-10">
          {/* Claim Value Section */}
          <div className="col-span-1 ml-[75px]">
            <h3 className="ml-[-40px] text-lg font-semibold mb-4 flex items-center">
              <img src={CalSign} className="h-[50px] w-[50px] mr-[5px]" alt="Claim Value Logo"></img>
              Claim Value
            </h3>
            <label className="block text-sm font-semibold mb-2 ">Contract Value</label>
            <input
              type="number"
              name="contractValue"
              value={formData.contractValue}
              onChange={handleChange}
              className="border p-2 w-full rounded bg-gray-100"
            />
            <label className="block text-sm font-semibold mt-4">Claim Value</label>
            <input
              type="number"
              name="claimValue"
              value={formData.claimValue}
              onChange={handleChange}
              className="border p-2 w-full rounded bg-gray-100"
            />
            <p className="text-sm text-orange-500 mt-1">150% of Contract Value</p>
          </div>

          {/* Place Section */}
          <div className="ml-[65px] col-span-1">
            <h3 className="ml-[-40px] mt-[10px] text-lg font-semibold mb-4 flex items-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-blue-500 text-[25px]" />
              Place
            </h3>
            <label className="block text-sm font-semibold mb-2 "></label>
            <select
              name="place"
              value={formData.place}
              onChange={handleChange}
              className="border p-2 w-[300px] rounded bg-gray-100 ml-[-15px]"
            >
              <option value="" className="text-gray-600">Select the place for proceedings</option>
              <option value="Location1">Location 1</option>
              <option value="Location2">Location 2</option>
            </select>
            <p className="ml-[-10px] text-gray-500 mt-[20px]">Is the place for proceedings the one mentioned in the agreement?</p>
            <div className="flex items-center mt-2">
              <label className="mr-4">
                <input type="radio" name="placeAgreement" value="yes" className="mr-1" />
                Yes
              </label>
              <label>
                <input type="radio" name="placeAgreement" value="no" className="mr-1" />
                No
              </label>
            </div>
          </div>

          {/* Language Section */}
          <div className="col-span-1 mt-[10px] ">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FontAwesomeIcon icon={faGlobe} className="mr-3 text-blue-500 text-[25px] " />
              Language
            </h3>
            
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="border p-2 w-[300px] rounded bg-gray-100 ml-[30px]"
            >
              <option value="">Select the language for proceedings</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
            </select>
            <p className="ml-[-10px] text-gray-500 mt-[20px] ml-[30px]">Is the place for proceedings the one mentioned in the agreement?</p>
            <div className="flex items-center mt-2 ml-[40px]">
              <label className="mr-4">
                <input type="radio" name="languageAgreement" value="yes" className="mr-1" />
                Yes
              </label>
              <label>
                <input type="radio" name="languageAgreement" value="no" className="mr-1" />
                No
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Statement, Agreement, and Documentation Section */}
      <div className="mb-6 ml-[35px]">
        <div className="grid grid-cols-3 gap-3">
          {/* Statement Section */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold flex items-center">
              <img src={stateLogo} className="h-[50px] w-[50px]"></img>
              Statement
            </h3>
            <label className="block text-sm font-semibold mb-2"></label>
            <div className="relative">
              <textarea
                name="statement"
                value={formData.statement}
                onChange={handleChange}
                className="border p-2 w-[300px] h-[100px] rounded bg-gray-100 ml-[45px] h-[120px] w-[200px]"
                placeholder="Write your Statement Here"
              />
              <div className="absolute right-[220px] bottom-4">
                <FontAwesomeIcon icon={faUpload} className="text-blue-500 mr-2" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
              </div>
            </div>
          </div>

          {/* Agreement Section */}
          <div className="col-span-1 ml-[-15px]">
         
            <h3 className=" mt-[-12px] text-lg font-semibold flex items-center">
              <img src={agreeLogo} className="h-[70px] w-[60px]"></img>
              Agreement under Disputes
            </h3>
            <div className="grid grid-cols-2 gap-2 ml-[60px]">
            
              <div className="border-dashed border-2 border-gray-300 p-4 text-center rounded bg-gray-100 w-[150px]">
                <FontAwesomeIcon icon={faUpload} className="text-blue-500 text-2xl mb-2 " />
                <p className="text-sm font-semibold">Upload the contract</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
              </div>
              <div className="border-dashed border-2 border-gray-300 p-4 ml-[-10px] text-center rounded bg-gray-100 w-[150px]">
                <FontAwesomeIcon icon={faUpload} className="text-blue-500 text-2xl mb-2" />
                <p className="text-sm font-semibold">Arbitration Agreement</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Upload</button>
              </div>
            </div>
          </div>

          {/* Additional Documentation Section */}
          <div className="col-span-1">
            <h3 className=" mt-[-12px] text-lg font-semibold flex items-center">
              <img src={infoLogo} className="h-[70px] w-[70px]" />
              Additional Documentation
            </h3>
            
            <div className="border-dashed border-2 border-gray-300 p-4 text-center rounded bg-gray-100 ml-[65px] w-[200px] h-[160px] relative">
              <p className="text-sm font-semibold mt-[25px]">Upload the Contract</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Upload</button>

              {/* Icon on the side of the Upload div */}
              <div className="absolute top-1/2 right-[-90px] transform -translate-y-1/2 bg-white border-2 border-blue-500 rounded-full w-[50px] h-[50px] flex items-center justify-center">
                <FontAwesomeIcon icon={faPlus} className="text-blue-500 text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaimForm;
