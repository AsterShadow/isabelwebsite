"use client";
import Image from "next/image";
import React from "react";

const ImageDetailsCarousel = ({ images }) => {
  const calcHeight = () => {
    
  };
  return (
    <div className="grid gap-4 h-[500px]">
      {images.map((image, index) => (
        // <div key={index} className=" object-scale-down">

        // </div>
        <Image
          src={image}
          alt="gallery painting"
          style={{ objectFit: "contain" }}
          height={calcHeight}
        />
      ))}
    </div>
  );
};

export default ImageDetailsCarousel;
