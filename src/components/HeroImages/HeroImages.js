"use client";

import React from "react";
import Image from "next/image";
import Images from "@/assets/images";

const HeroImages = () => {
  return (
    <div className="hidden md:flex justify-around gap-[5%]">
      <div className="mt-[-15%] max-h-[800px] overflow-clip">
        <Image src={Images.landing3} alt="peinture" />
      </div>
      <div className="mt-[-10%] max-h-[800px] overflow-clip">
        <Image src={Images.landing1} alt="peinture" />
      </div>
      <div className="mt-[-13%] max-h-[800px] overflow-clip">
        <Image src={Images.landing2} alt="peinture" />
      </div>
    </div>
  );
};

export default HeroImages;
