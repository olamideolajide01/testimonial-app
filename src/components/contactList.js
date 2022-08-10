import React from "react";

export default function contactList({ contacts }) {
  return (
    <div>
      {contacts.contactList.map((contact) => (
        <div className="card" key={contact.id}>
          <p className="text-center">
            <img className="w-32 h-32" src={contact.image} alt="" />
          </p>
          <h4 className="mt-3 font-bold text-[1.5rem]  text-stone-600">
            {contact.firstname} {contact.lastname}
          </h4>
          <div className="flex flex-row space-x-4 items-center mt-3 mb-1">
            <div className="">
              <p className="font-semibold text-stone-500">{contact.location}</p>
            </div>
            {contact.category === "vendor" ? (
              <p className="text-xs inline-block text-green-600 font-semibold py-1 px-1 rounded bg-slate-200 ">
                {contact.category.toUpperCase()}
              </p>
            ) : (
              <p className="text-xs inline-block text-blue-600 font-semibold py-1 px-1 rounded bg-slate-200">
                {contact.category.toUpperCase()}{" "}
              </p>
            )}
          </div>
          <p className="mt-4 text-stone-600">{contact.text}</p>
        </div>
      ))}
    </div>
  );
}
