import Images from "@/assets/images";
import Image from "next/image";
import React from "react";

const GalleryImages = () => {
  const placeholders = [
    Images.landing1,
    Images.landing2,
    Images.landing3,
    Images.landing4,
    Images.landing5,
    Images.landing1,
    Images.landing2,
    Images.landing3,
    Images.landing4,
    Images.landing5,
  ];
  return (
    <div className="full grid grid-cols-1 md:grid-cols-2 gap-4 px-2">
      {placeholders.map((image, index) => (
        <div key={index} className="max-w-[500px]">
          <Image src={image} alt="gallery painting" />
        </div>
      ))}
    </div>
  );
};

export default GalleryImages;
