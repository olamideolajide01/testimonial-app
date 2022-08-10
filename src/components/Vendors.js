import React from "react";
import { datas } from "../vendors";

const vendorArray = () => {
  return (
    <div className="md:flex flex-row container sm:w-4/5 md:justify-between pt-6 md:pt-10  lg:pt-15">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {datas.map((data) => {
          return <Vendor key={data.id} {...data}></Vendor>;
        })}
      </div>
    </div>
  );
};

const Vendor = ({ image, firstname, lastname, category, text }) => {
  return (
    <section className="text-sm  md:px-1  px-2">
      <p className="text-center">
        <img className="w-32 h-32" src={image} alt="" />
      </p>
      <h4 className="mt-3 font-bold text-[1.5rem]  text-stone-600">
        {firstname} {lastname}
      </h4>
      <div className=" my-2">
        <p className="md:text-xs inline-block text-green-600 font-semibold py-1 px-1 rounded bg-slate-200">
          {category}
        </p>
      </div>
      <p className="mt-4 text-stone-600">{text}</p>
    </section>
  );
};

export default vendorArray;
