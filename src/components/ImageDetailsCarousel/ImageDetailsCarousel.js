"use client";
import { urlFor } from "@/lib/sanity";
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
      {images&&images.map((image, index) => (
        <button key={index} href={handleLink(index)}>
          <div className="border-2 border-main">
            <div className="m-2">
              <img src={urlFor(image).url()} alt="gallery painting" />
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ImageDetailsCarousel;
