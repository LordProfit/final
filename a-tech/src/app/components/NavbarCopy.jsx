import React from "react";
import { BsSearch } from "react-icons/bs";
import { ImCart } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-20 lg:h-28 border-b-[1px] border-gray-500 text-black lg:text-white bg-white lg:bg-transparent">
      <div className="flex items-center justify-between h-full px-4 mx-auto max-w-screen-2xl">
      <Image
              src={'/logo.png'}
              width={80}
              height={4}
              alt='logo'
              priority={true}
            />
        <ul className="items-center hidden gap-8 text-sm font-semibold uppercase lg:inline-flex">
          <li className="navbarLi">Home</li>
          <li className="navbarLi">Pages</li>
          <li className="navbarLi">Services</li>
          <li className="navbarLi">Portfolio</li>
          <li className="navbarLi">Blog</li>
          <li className="navbarLi">Shop</li>
        </ul>
        <div className="items-center hidden gap-8 lg:inline-flex">
          <BsSearch className="text-xl hover:text-hoverColor" />
          <div className="relative">
            <ImCart className="text-xl" />
            <span className="absolute left-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-yellow-600 rounded-full -bottom-2">
              0
            </span>
          </div>
          <button className="w-48 text-sm font-semibold text-black uppercase duration-300 bg-white rounded-md h-14 hover:bg-darkRed hover:text-white">
            Get in Touch
          </button>
        </div>
        <div className="inline-flex lg:hidden">
          <FiMenu className="text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;