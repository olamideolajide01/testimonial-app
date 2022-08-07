import React from "react";
// import ReviewForm from "../components/ReviewForm";

export default function HeroPage() {
  return (
    <div>
      <section className="md:flex flex-row container sm:w-4/5 md:justify-between pt-6 md:pt-10  lg:pt-15 ">
        <div className="self-center ">
          <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl  sm:w-full  tracking-tight ">
            Amazing <br /> Experiences from Our <br />
            Wonderful Customers
          </h1>
          <p className="mt-6 text-xs sm:text-base sm:w-96 ">
            Here is what customers and vendors are saying about us, you can
            share your stories with us too.
          </p>
        </div>
        <div className="flex bg-blob-pink justify-center item-center object-center md:w-5/12   rounded-full mt-4">
          <img src="imgs/hero-img.png" alt="" />
        </div>
      </section>

      <section className="bg-neutral">
        <div className=" px-2  flex flex-col-reverse sm:flex sm:flex-row container sm:w-4/5 md:space-x-10 sm:space-x-5  md:justify-around pt-6 md:pt-10  lg:pt-15">
          <div className="flex bg-blob-grey justify-center item-center rounded-full mt-4 sm:order-1 order-3 md:w-5/12 ">
            <img src="imgs/hero-img2.png" alt="" />
          </div>

          <div className="text-white self-center mt-6 pb-5 order-first sm:order-2 px-4 sm:px-0  ">
            <h2 className="font-bold text-base md:text-2xl lg:text-3xl  sm:w-full  tracking-tight">
              Tolu & Joy's Experience
            </h2>
            <p className="sm:text-xs text-[.52rem] inline-block border-solid border border-blob-grey py-1 px-2 rounded white-600">
              CUSTOMER
            </p>
            <p className=" mt-5 text-xs md:text-sm  md:w-96">
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </p>
            <button className="text-[.52rem] relative curve  sm:text-xs  mt-5">
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
        </div>
      </section>
    </div>
  );
}
