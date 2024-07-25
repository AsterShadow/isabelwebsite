"use client";
import Images from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GalleryImages = ({images}) => {

  return (
    <div className="full columns-2 2xl:columns-3 px-2">
      {images.map((image, index) => (
        <Link href={`/product/${image.slug}`} key={index}>
          <div className="w-full h-auto object-cover py-2">
            <Image src={image.main} alt="gallery painting" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GalleryImages;
