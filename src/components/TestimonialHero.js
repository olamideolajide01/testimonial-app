import React from "react";

export default function TestimonialHero() {
  return (
    <section className="bg-pink-50">
      <div className=" px-1  md:flex flex-row container sm:w-4/5 md:space-x-10 sm:space-x-5  justify-around pt-6 md:mt-10  lg:mt-15">
        <div className="text-black self-center px-5 sm:px-0  ">
          <h2 className="font-bold text-base md:text-2xl lg:text-3xl  sm:w-full  tracking-tight ">
            Josiah’s Experience
          </h2>
          <p className="sm:text-xs text-[.52rem]  text-orange inline-block border-solid border border-orange py-1 px-2 rounded">
            VENDOR
          </p>
          <p className="text-xs md:text-sm sm:w-96 mt-5">
            I had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definately be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definately be coming back!
          </p>
          <button className="text-[.52rem] sm:text-xs text-orange mt-5 pb-3">
            SHARE YOUR OWN STORY
            <svg
              width="200"
              height="12"
              viewBox="0 0 297 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 11.2012C71.3333 5.86791 228.8 -3.19875 296 3.20125"
                stroke="#FF5C00"
              />
            </svg>
          </button>
        </div>
        <div className="flex bg-pink-100 justify-center item-center rounded-full mt-4  md:w-5/12 ">
          <img src="imgs/shopping-bag.png" className=" mt-4 " alt="" />
        </div>
      </div>
    </section>
  );
}
