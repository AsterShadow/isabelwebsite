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
            <div className="py-2" key={index}>
              <Link href={`/product/${image.slug.current}`} >
                <div className="transition ease-out delay-150 w-full h-auto relative hover:scale-95">
                  <img src={urlFor(image.main).url()} alt="gallery painting" loading="lazy"/>
                </div>
                {/* <p className="text-xs text-gray-300 lg:text-lg">{image.name}</p> */}
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default GalleryImages;
