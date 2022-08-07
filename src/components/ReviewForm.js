import React from "react";
import { FaTimes } from "react-icons/fa";

export default function ReviewForm() {
  return (
    <div>
      <div className="flex justify-center items-center overflow-x-hidden  max-h-screen fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative  my-6 mx-auto overflow-y   w-auto max-h-screen ">
          <div className="border-0 px-5   rounded-lg shadow-lg relative  w-full  bg-white outline-none focus:outline-none">
            <span className="p-2 ">
              <FaTimes />
            </span>
            <h2 className="text-center pt-2 pb-4 font-black text-[1.2rem]">
              Share your amazing story!
            </h2>

            <form>
              <p className="mb-3">
                <label htmlFor="image" className="text-xs">
                  Upload your picture
                </label>
                <input
                  hidden
                  type="file"
                  id="image"
                  class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
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
                    type="text"
                    name="firstname"
                    id="firstname"
                    autoComplete="given-name"
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
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <p className="mb-3">
                <span class="block text-xs font-medium text-slate-700">
                  Share your story
                </span>
                <textarea
                  className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                   focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange"
                  id="story"
                  rows="3"
                  placeholder="Your message"
                ></textarea>
              </p>

              <p className="mb-4">
                <div className="text-xs">
                  what did you Interact with vasiti as?
                </div>
                <div>
                  <label className=" text-xs  text-gray-800" for="Customer">
                    Customer
                  </label>
                  <input
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-orange checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="category"
                    id="customer"
                  />
                </div>
                <div>
                  <label className=" text-xs  text-gray-800" for="vendor">
                    Vendor
                  </label>
                  <input
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-orange checked:border-orange focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="category"
                    id="vendor"
                  />
                </div>
              </p>

              <p>
                <label htmlFor="lasttname" class="block mb-3">
                  <span class="block text-xs font-medium text-slate-700">
                    City or Higer Institution (For Student)
                  </span>

                  <input
                    type="text"
                    class="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                   focus:outline-none focus:border-orange focus:ring-1 focus:ring-orange"
                  />
                </label>
              </p>

              <p className="text-end mt-5">
                <button
                  className="text-white text-sm bg-orange rounded  px-16 py-3  mb-4 "
                  // onClick={() => setShowModal(false)}
                >
                  Share Your Story!
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
