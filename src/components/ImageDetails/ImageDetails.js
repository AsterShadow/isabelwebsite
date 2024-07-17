"use client";
import React from "react";
import ImageDetailsCarousel from "../ImageDetailsCarousel/ImageDetailsCarousel";
import Image from "next/image";

const ImageDetails = ({ item }) => {
  return (
    <div className="flex gap-12">
      <div className="hidden lg:block">
        <ImageDetailsCarousel images={item.images} />
      </div>
      <div className="flex flex-col gap-12">
        {item.images.map((image, index) => (
          <div key={index} className="">
            <div className="max-w-[500px]">
              <Image src={image} alt="gallery painting" />
            </div>
            <div className="flex justify-between capitalize">
              <h2 className="text-4xl">{item.title}</h2>
              <div>{item.status}</div>
            </div>
            <div className="flex gap-12 capitalize">
              <div>{item.price}$</div>
              <div>{item.createdAt}</div>
              <div>{item.medium}</div>
            </div>
            <div>{item.dimensions}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDetails;
