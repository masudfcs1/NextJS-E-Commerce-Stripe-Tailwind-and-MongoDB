import React from "react";
import Link from "next/link";

import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className=" bg-teal-600 text-white h-[60px] w-full py-2 px-6 flex justify-center ">
      <div className=" h-full w-10/12 my-auto flex justify-between items-center">
        {/* left */}
        <h2>
          <Link className="hover:text-[#f8eaea] text-3xl p-10" href="/">
            ShamuShop
          </Link>
        </h2>
        {/* center */}
        <ul className="flex gap-6 items-center justify-center text-white text-[18px] ">
          <li className=" cursor-pointer transition-all hover:text-[#e2e4e4] hover:text-2xl">
            Home
          </li>
          <li className=" cursor-pointer transition-all hover:text-[#e2e4e4] hover:text-2xl">
            Hero
          </li>
          <li className=" cursor-pointer transition-all hover:text-[#e2e4e4] hover:text-2xl">
            Categories
          </li>
          <li className=" cursor-pointer transition-all hover:text-[#e2e4e4] hover:text-2xl">
            Featured
          </li>
          <li className=" cursor-pointer transition-all hover:text-[#e2e4e4] hover:text-2xl">
            Contacts
          </li>
        </ul>
        {/* right */}
        <div className=" flex items-center justify-center gap-6 ">
          <div className=" flex px-2 items-center py-1 gap-4 rounded-lg bg-white">
            <input
              className=" text-[#222] outline-none font-sansa"
              type="text"
              placeholder="Search..."
            />
            <AiOutlineSearch
              className="cursor-pointer text-xl hover:text-2xl transition-none"
              color="black"
            />
          </div>
          <div className=" relative">
            <AiOutlineShoppingCart size={25} />
            <span className=" absolute -top-2 -right-4 bg-white px-2 text-black rounded-full">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
