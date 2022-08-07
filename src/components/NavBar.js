import React from "react";
import { FaBars } from "react-icons/fa";

export default function NavBar() {
  return (
    <div>
      <header className="shadow py-3 ">
        <section className="sm:pb-3 max-w-full mx-auto w-4/5 flex flex-row justify-between item-center ">
          <div className="flex flex-row items-center">
            <img src="imgs/logo.png" className="h-10 w-10" alt="" />
            <h2 className="font-bold text-xl">
              Vasiti
              <span className="font-bold text-xs text-orange">.com</span>
            </h2>
          </div>
          <ul className="none  sm:flex flex-row space-x-2 md:space-x-5 lg:space-x-10 self-center text-xs ">
            <li className=" self-center inline-block">ABOUT US</li>
            <li className=" self-center inline-block">STORIES</li>
            <li className=" self-center inline-block">CONTACT</li>
            <li className=" self-center inline-block">LOGIN</li>
            <li className=" py-2 px-3 text-white bg-orange-500 rounded  inline-block">
              SIGN UP
            </li>
          </ul>
          <div className="sm:none self-center">
            <FaBars className="text-base" />
          </div>
        </section>
        <hr className="none md:divide-y divide-gray-400" />
        <section className="pb-3 max-w-full mx-auto w-4/5 py-3   ">
          <ul className="none sm:flex flex-row items-center justify-center space-x-3 md:space-x-10 lg:space-x-20 text-xs ">
            <li className="">MARKETPLACE</li>
            <li className="">WHOLESALE CENTER</li>
            <li className="">SELLER CENTER</li>
            <li className="">SERVICES</li>
            <li className="">INTERSHIPS</li>
            <li className="">EVENTS</li>
          </ul>
        </section>
      </header>
    </div>
  );
}
