"use client";
import Images from "@/assets/images";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const GalleryImages = ({ images }) => {
  return (
    <div className="full columns-2 2xl:columns-3 px-2">
      {images.length >= 1 && (
        <>
          {images.map((image, index) => (
            <Link href={`/product/${image.slug.current}`} key={index}>
              <div className="w-full h-auto py-2 relative">
                <img
                  src={urlFor(image.main).url()}
                  alt="gallery painting"
                />
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default GalleryImages;
