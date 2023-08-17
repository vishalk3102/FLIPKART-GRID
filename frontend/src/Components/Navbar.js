import React from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div
        id="navbar"
        className="text-[#fff] bg-[#000] w-full h-[4rem] grid grid-cols-5"
      >
        <div className="logo p-2 col-span-1  flex justify-center items-center">
          <h2 className="text-[1rem]  sm:text-xl md:text-2xl font-bold uppercase">
            Penaqui
          </h2>
        </div>
        <div className="search-box w-full col-span-3 my-auto">
          <div className="flex justify-center md:justify-start items-center flex-row mx-auto">
            <input
              type="text"
              className=" w-[80%] md:w-[100%] h-[2.5rem] border-solid border-black border-2 rounded-[3rem] "
            />
            <span className="p-1  relative right-10 hover:cursor-pointer">
              <BsSearch size={24} className="text-[#000]" />
            </span>
          </div>
        </div>
        <div className="icons col-span-1 flex justify-center items-center p-2">
          <span className=" p-1 m-1 md:p-2 md:mx-3 hover:scale-110 hover:cursor-pointer">
            <AiOutlineUser size={24} />
          </span>
          <span className=" p-1 m-1 md:p-2 md:mx-3 hover:scale-110 hover:cursor-pointer">
            <AiOutlineShoppingCart size={24} />
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
