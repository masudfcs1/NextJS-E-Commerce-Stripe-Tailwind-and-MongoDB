import React from "react";
import Image from "next/image";

import womanimg from "../public/assets/womanimg.jpg";

const Hero = () => {
  return (
    <div className=" h-[500px] w-full flex justify-center mt-16 mb-[20rem] ">
      <div>
        <Image src={womanimg} />
        <div>
          <span>
            Get some nice <span>Sunglass</span>
          </span>
          <span>As a distance of a click</span>
          <button>See now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
