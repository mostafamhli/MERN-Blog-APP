import React from "react";
import images from "../constants/images";
import {
  AiOutlineTwitter,
  AiFillYoutube,
  AiFillInstagram,
  AiFillHeart,
} from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
const Footer = () => {
  return (
    <section className="bg-dark-hard">
      <footer className="container mx-auto grid grid-cols-10 px-5 py-10 gap-y-10 gap-x-5 md:pt-20 md:grid-cols-12 lg:grid-cols-10 lg:gap-x-10">
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Product</h3>
          <ul className="text-[#959ead] text-sm space-y-4 mt-5 md:text-base">
            <li>
              <a href="">Landingpage</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">Documentation</a>
            </li>
            <li>
              <a href="">Referral Program</a>
            </li>
            <li>
              <a href="">Pricing</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">Services</h3>
          <ul className="text-[#959ead] text-sm space-y-4 mt-5 md:text-base">
            <li>
              <a href="">Documentation</a>
            </li>
            <li>
              <a href="">Design</a>
            </li>
            <li>
              <a href="">Themes</a>
            </li>
            <li>
              <a href="">Illustrations</a>
            </li>
            <li>
              <a href="">UI Kit</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2 md:col-start-5 lg:col-start-auto">
          <h3 className="text-dark-light font-bold md:text-lg">Company</h3>
          <ul className="text-[#959ead] text-sm space-y-4 mt-5 md:text-base">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Terms</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
          </ul>
        </div>
        <div className="col-span-5 md:col-span-4 lg:col-span-2">
          <h3 className="text-dark-light font-bold md:text-lg">More</h3>
          <ul className="text-[#959ead] text-sm space-y-4 mt-5 md:text-base">
            <li>
              <a href="">Documentation</a>
            </li>
            <li>
              <a href="">License</a>
            </li>
            <li>
              <a href="">Changelog</a>
            </li>
          </ul>
        </div>

        <div className="col-span-10 md:col-span-4 lg:col-span-2 md:order-first">
          <img
            src={images.Logo}
            alt="logo"
            className="brightness-0 invert mx-auto md:mx-0"
          />
          <p className="text-sm text-dark-light text-center mt-4 md:text-left md:text-base lg:text-sm">
            Build a modern and creative website with crealand
          </p>
          <ul className="flex justify-center items-center mt-5 space-x-4 text-gray-300 md:justify-start">
            <li>
              <a href="">
                <AiOutlineTwitter className="w-6 h-auto hover:text-blue-600" />
              </a>
            </li>
            <li>
              <a href="">
                <AiFillYoutube className="w-6 h-auto hover:text-red-600" />
              </a>
            </li>
            <li>
              <a href="">
                <AiFillInstagram className="w-6 h-auto hover:text-rose-600" />
              </a>
            </li>
            <li>
              <a href="">
                <FaFacebook className="w-6 h-auto hover:text-blue-700" />
              </a>
            </li>
            <li>
              <a href="">
                <BsTelegram className="w-6 h-auto hover:text-blue-500" />
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-center space-y-4 md:col-span-12 lg:col-span-10">
          <div className="bg-primary text-white p-3 rounded-full">
            <AiFillHeart className="w-7 h-auto" />
          </div>
          <p className="font-bold italic text-dark-light">
            Copyright © 2023. Crafted with all love.
          </p>
          <p className="font-bold italic text-dark-light">
            <span className="text-primary text-xl">M</span>ostafa Mhli
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
