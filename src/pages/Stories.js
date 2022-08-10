import React, { useState } from "react";
// import ThankYou from "../components/ThankYou";
import data from "./../customers";

export default function ReviewForm() {
  const [people, setPeople] = useState(data);
  const [testInfo, setTestInfo] = useState({
    image: "",
    firstName: "",
    lastName: "",
    text: "",
    category: "",
    location: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="flex justify-center items-center outline-none focus:outline-none">
        <div className="relative  my-6 mx-auto   w-auto max-h-screen  ">
          <div className="border-0 px-5   rounded-lg shadow-lg relative  w-full  bg-white outline-none focus:outline-none">
            <h2 className="text-center pt-2 pb-4 font-black text-[1.5rem]">
              Share your amazing story!
            </h2>

            <form onSubmit={handleSubmit}>
              <p className="mb-3">
                <label htmlFor="image" className="text-xs">
                  Upload your picture
                </label>
                <input
                  onChange={(e) => setTestInfo(e.target.value)}
                  value={testInfo.image}
                  type="file"
                  id="image"
                  className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                   focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange"
                />
              </p>
              <div className="grid grid-cols-6 gap-6 mb-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="firstname"
                    className="block text-xs font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    id
                    type="text"
                    name="firstname"
                    value={testInfo.firstName}
                    onChange={(e) => setTestInfo(e.target.value)}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="lastname"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    value={testInfo.lastName}
                    onChange={(e) => setTestInfo(e.target.value)}
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <p className="mb-3">
                <span className="block text-xs font-medium text-slate-700">
                  Share your story
                </span>
                <textarea
                  className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                   focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange"
                  id="story"
                  rows="3"
                  placeholder="Your message"
                  value={testInfo.text}
                  onChange={(e) => setTestInfo(e.target.value)}
                ></textarea>
              </p>

              <div className="mb-4">
                <div className="text-xs">
                  what did you Interact with vasiti as?
                </div>
                <div>
                  <label className=" text-xs  text-gray-800" htmlFor="Customer">
                    Customer
                  </label>
                  <input
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-orange checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="category"
                    id="customer"
                    value="customer"
                    checked={testInfo.category === "customer"}
                    onChange={(e) => setTestInfo(e.target.value)}
                  />
                </div>
                <div>
                  <label className=" text-xs  text-gray-800" htmlFor="vendor">
                    Vendor
                  </label>
                  <input
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-orange checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="category"
                    id="vendor"
                    value="vendor"
                    checked={testInfo.category === "vendor"}
                    onChange={(e) => setTestInfo(e.target.value)}
                  />
                </div>
              </div>

              <p>
                <label htmlFor="location" className="block mb-3">
                  <span className="block text-xs font-medium text-slate-700">
                    City or Higer Institution (For Student)
                  </span>

                  <input
                    value={testInfo.location}
                    onChange={(e) => setTestInfo(e.target.value)}
                    id="location"
                    type="text"
                    className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                   focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange"
                  />
                </label>
              </p>

              <p className="text-end mt-5">
                <button
                  className="text-white text-sm bg-orange rounded  px-16 py-3  mb-4 "
                  // onClick={() => Toggle2()}
                >
                  Share Your Story!
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* {showModel && <ThankYou />} */}
    </div>
  );
}
