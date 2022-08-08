import React from "react";

export default function ThankYou({ shown, close2 }) {
  return (
    <div>
      {shown ? (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto  max-w-xl">
            <div className="border-0 text-center container rounded-lg shadow-lg relative f w-96  bg-white outline-none focus:outline-none">
              <img
                src="imgs/happy.png"
                alt=""
                className="text-[4rem] w-28 h-28 mt-16 p-5 rounded-full font=semibold text-center inline-block bg-pink-50"
              />
              <h2 className="font-bold text-[1.5rem]">
                Thank you for <br /> sharing your story!
              </h2>
              <p className="relative mt-4 mb-8 px-6  text-xs ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Debitis asperiores, velit magni illum eum maiores vero, delectus
                ullam.dolor.
              </p>
              <button
                onClick={() => close2()}
                className="text-white bg-orange rounded  px-16 py-3  mb-20 "
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
