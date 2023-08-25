/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";

import womanimg from "../public/assets/womanimg.jpg";

const Hero = () => {
  return (
    <div className=" h-[500px] w-full flex justify-center mt-16 mb-[20rem] ">
      <div className=" relative h-[500px] w-10/12 mx-auto ">
        <Image className=" h-[500px] object-cover rounded-xl " src={womanimg} />
        <div className=" absolute top-[10rem] left-[2.5rem] flex flex-col gap-4 ">
          <span className=" text-4xl text-white l">
            Get some nice{" "}
            <span className=" text-black font-bold text-5xl ">Sunglass</span>
          </span>
          <span className=" text-white text-2xl">As a distance of a click</span>
          <button className=" bg-[#080808] text-white  px-5 py-3 rounded-lg text-[18px] hover:bg-[#161616] hover:text-[17px] transition-all ">
            See now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
