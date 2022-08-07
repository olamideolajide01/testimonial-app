import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const IconStyling = `bg-white rounded-full px-2 py-2 
 `;

export default function FooterPage() {
  return (
    <footer className="bg-neutral">
      <section className="container ">
        <div className="flex flex-col-reverse sm:flex sm:flex-row justify-around relative  ">
          <div className="sm:-mt-12 mt-7  ">
            <img src="imgs/footer-img.png" className=" max-w-full " alt="" />
          </div>
          <div className="self-center mt-8 sm:mt-6  md:0 text-white  ">
            <h2 className="font-bold text-xl sm:text-2xl leading-0">
              Be a member <br /> of our community <span>🎉</span>
            </h2>
            <p className="text-xs sm:text-sm mt-3">
              We’d make sure you’re always first to <br /> know what’s happening
              on Vasiti—thus, the world.
            </p>

            <div className="flex mt-4">
              <input
                type="email"
                id="subscribe"
                class=" rounded-l-lg   text-white focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-500 dark:border-gray-600 dark:placeholder-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email address"
              />
              <button class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-r-lg border  border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="text-white  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:py-20 py-10 ">
          <div className="text-xs">
            <h3 className="font-bold ">Company</h3>
            <p className="mt-3">About us</p>
            <p className="mt-2">Term of Use</p>
            <p className="mt-2">Privacy Policy</p>
            <p className="mt-2">Press and Media</p>
          </div>
          <div className="text-xs mt-5 sm:mt-0 ">
            <h3 className="font-bold ">Products</h3>
            <p className="mt-3">Marketplace</p>
            <p className="mt-2">Magazine</p>
            <p className="mt-2">Seller</p>
            <p className="mt-2">Wholesale</p>
            <p className="mt-2">Services</p>
          </div>
          <div className="text-xs  mt-5 sm:mt-0">
            <h3 className="font-bold ">Careers</h3>
            <p className="mt-3">Become a Campous Rep</p>
            <p className="mt-2">Become a Vasiti Influencer</p>
            <p className="mt-2">Become a Campous writer</p>
            <p className="mt-2">Become an Affliate</p>
          </div>
          <div className="text-xs  mt-5  md:mt-0">
            <h3 className="font-bold ">Get in touch</h3>
            <p className="mt-3">Contact us</p>
            <p className="mt-2">Patner with us</p>
            <p className="mt-2">Advitise with us</p>
            <p className="mt-2">Help/FAQS</p>
          </div>
          <div className="text-xs  mt-5 lg:mt-0">
            <h3 className="font-bold ">Join our community</h3>
            <div className="mt-3 flex flex-row space-x-2">
              <FaFacebookF
                color="black"
                fontSize="2rem"
                className={IconStyling}
              />
              <FaInstagram
                color="black"
                fontSize="2rem"
                className={IconStyling}
              />
              <FaLinkedinIn
                color="black"
                fontSize="2rem"
                className={IconStyling}
              />
              <FaTwitter
                color="black"
                fontSize="2rem"
                className={IconStyling}
              />
            </div>
            <p className="mt-3">Email Newsletter</p>
          </div>
        </div>
      </section>
    </footer>
  );
}
