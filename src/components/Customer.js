import React from "react";
import customers from "../customers";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(customers);

  //   const removeItem = (id) => {
  //     setPeople((oldPeople) => {
  //       let newPeople = oldPeople.filter((person) => person.id !== id);
  //       return newPeople;
  //     });
  //   };

  return (
    <div className="md:flex flex-row container sm:w-4/5 md:justify-between pt-6 md:pt-10  lg:pt-15">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {people.map((person) => {
          return (
            <div>
              <Customer key={person.id} {...person}></Customer>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Customer = ({ image, firstname, lastname, location, category, text }) => {
  console.log(image);
  return (
    <section className="text-sm  md:px-1  px-2">
      <p className="text-center">
        <img className="w-32 h-32" src={image} alt="" />
      </p>
      <h4 className="mt-3 font-bold text-[1.5rem]  text-stone-600">
        {firstname} {lastname}
      </h4>
      <div className="flex flex-row space-x-4  my-1">
        <div className="">
          <p className="font-semibold text-stone-500">{location}</p>
        </div>
        <p className="room--rating ">{category}</p>
      </div>
      <p className="mt-4 text-stone-600">{text}</p>
    </section>
  );
};

export default UseStateArray;
