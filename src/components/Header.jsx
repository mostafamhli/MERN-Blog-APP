import React, { useState } from "react";
import { images } from "../constants";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
const NavItemsInfo = [
  {
    name: "Home",
    type: "link",
  },
  {
    name: "Articles",
    type: "link",
  },
  {
    name: "Pages",
    type: "dropdown",
    items: ["About Us", "Contact Us"],
  },
  {
    name: "Pricing",
    type: "link",
  },
  {
    name: "Faq",
    type: "link",
  },
];
const NavItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);
  const ToggleDropdownHandler = () => {
    setDropdown((curState) => {
      return !curState;
    });
  };
  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a href="" className="px-4 py-2">
            {item.name}
          </a>
          <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 opacity-0  group-hover:right-[90%] group-hover:opacity-100 ">
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="px-4 py-2 flex gap-1 items-center"
            onClick={ToggleDropdownHandler}
          >
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page, index) => (
                <a
                  key={index}
                  href=""
                  className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft w-full"
                >
                  {page}
                </a>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};
const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };
  return (
    <section className="sticky top-0 left-0 right-0 z-[50] bg-white">
      <header className="container mx-auto px-5 py-4 flex justify-between items-center">
        <div>
          <img className="w-16" src={images.Logo} alt="logo" />
        </div>
        <div className="lg:hidden z-[50]">
          {navIsVisible ? (
            <AiOutlineClose
              className="w-6 h-6"
              onClick={navVisibilityHandler}
            />
          ) : (
            <AiOutlineMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? "right-0" : "-right-full"
          } transition-all duration-500 z-[49] mt-[56px] lg:mt-0 flex flex-col justify-center w-full lg:flex-row lg:justify-end lg:w-auto fixed top-0 bottom-0  lg:static gap-x-9 items-center bg-dark-hard lg:bg-transparent`}
        >
          <ul className="flex flex-col items-center gap-y-5 lg:flex-row gap-x-2 text-white lg:text-dark-soft font-semibold">
            {NavItemsInfo.map((item) => (
              <NavItem key={item.name} item={item}></NavItem>
            ))}
          </ul>
          <button className="mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 text-blue-500 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
            Sign In
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
