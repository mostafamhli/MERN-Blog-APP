import React from "react";
import images from "../constants/images";
import { BsCheck2 } from "react-icons/bs";
import { Link } from "react-router-dom";
const ArticleCard = ({ className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
    >
      <Link to="/blog/1">
        <img
          src={images.post1Image}
          alt="title"
          className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
        />
      </Link>
      <div className="p-5">
        <h2 className="font-roboto text-xl font-bold text-dark-soft md:text-2xl lg:text-[28px]">
          Future of Work
        </h2>
        <p className="font-opensans text-sm text-dark-light mt-3 md:text-lg ">
          Majority of peole will work in jobs that don’t exist today.
        </p>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={images.postProfileImage}
              alt="post profile"
              className="w-9 h-9 md:w-10 md:h-10"
            />

            <div className="flex flex-col">
              <h4 className="italic font-bold text-dark-soft text-sm md:text-base">
                Viola Manisa
              </h4>
              <div className="flex items-center gap-x-2">
                <span className="bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full">
                  <BsCheck2 className="text-[#36B37E] w-4 h-4" />
                </span>
                <span className="italic text-dark-light font-opensans text-base md:text-sm">
                  Verified writer
                </span>
              </div>
            </div>
          </div>
          <p className="font-bold italic text-sm text-dark-light md:text-base">
            02 May
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
