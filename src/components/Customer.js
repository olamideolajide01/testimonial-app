import React from "react";
import { customers } from "../customers";

const UseStateArrays = () => {
  return (
    <div className="md:flex flex-row container sm:w-4/5 md:justify-between pt-6 md:pt-10  lg:pt-15">
      <div className="grid grid-cols-1 mb-6 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {customers.map((customer) => {
          return <Customer key={customer.id} {...customer}></Customer>;
        })}
      </div>
    </div>
  );
};

const Customer = ({ image, firstname, lastname, location, category, text }) => {
  return (
    <section className="text-sm  md:px-1  px-2">
      <p className="text-center">
        <img className="w-32 h-32" src={image} alt="" />
      </p>
      <h4 className="mt-3 font-bold text-[1.5rem]  text-stone-600">
        {firstname} {lastname}
      </h4>
      <div className="flex flex-row space-x-4 items-center mt-3 mb-1">
        <div className="">
          <p className="font-semibold text-stone-500">{location}</p>
        </div>
        {category === "vendor" ? (
          <p className="text-xs inline-block text-green-600 font-semibold py-1 px-1 rounded bg-slate-200 ">
            {category.toUpperCase()}
          </p>
        ) : (
          <p className="text-xs inline-block text-blue-600 font-semibold py-1 px-1 rounded bg-slate-200">
            {category.toUpperCase()}
          </p>
        )}
      </div>
      <p className="mt-4 text-stone-600">{text}</p>
    </section>
  );
};

export default UseStateArrays;
