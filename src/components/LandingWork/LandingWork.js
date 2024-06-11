import Link from "next/link";
import React from "react";
import Button from "../Button/Button";

import Images from "@/assets/images";
import Image from "next/image";

const LandingWork = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-48 pb-24 md:py-48 gap-16">
      <h2 className="font-headers text-3xl md:text-6xl">Voir mes Oeuvres</h2>
      <div className="flex justify-around pt-24 ">
        <div className="mx-[-50px] mt-[-6%] max-w-[300px] max-h-[500px] overflow-clip shrink-0">
          <Image src={Images.landing3} alt="peinture" />
        </div>
        <div className="mx-[-50px] mt-[-3%] max-w-[300px] max-h-[500px] overflow-clip shrink-0">
          <Image src={Images.landing1} alt="peinture" />
        </div>
        <div className="hidden lg:block mx-[-50px] mt-[-6%] max-w-[300px] max-h-[500px] overflow-clip shrink-0">
          <Image src={Images.landing2} alt="peinture" />
        </div>
        <div className="hidden lg:block mx-[-50px] mt-[-2%] max-w-[300px] max-h-[500px] overflow-clip shrink-0">
          <Image src={Images.landing4} alt="peinture" />
        </div>
        <div className="mx-[-50px] mt-[-6%] max-w-[300px] max-h-[500px] overflow-clip shrink-0">
          <Image src={Images.landing5} alt="peinture" />
        </div>
      </div>
      <div className="pt-18">
        <Link href="/gallery">
          <Button className="text-xl max-w-48">Découvrir</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingWork;
