"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ImageDetailsCarousel = ({ images }) => {
  const handleLink = (index) => {
    const link = index.toString();
    return link;
  };
  return (
    <div className="grid gap-4 w-[150px] px-2">
      {images.map((image, index) => (
        <Link key={index} href={handleLink(index)}>
          <div className="border-2 border-main">
            <div className="m-2">
              <Image src={image} alt="gallery painting" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ImageDetailsCarousel;
