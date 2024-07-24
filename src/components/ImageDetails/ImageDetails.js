"use client";
import React from "react";
import ImageDetailsCarousel from "../ImageDetailsCarousel/ImageDetailsCarousel";
import Image from "next/image";

const ImageDetails = ({ item }) => {
  return (
    <div className="flex gap-12 w-full">
      {/* <div className="hidden lg:block max-h-[70dvh] overflow-y-scroll fixed custom-scrollbar">
        <ImageDetailsCarousel images={item.images} />
      </div> */}
      <div className="flex flex-col gap-16 px-8 md:m-auto">
        {item.images.map((image, index) => (
          <div
            key={index}
            id={index.toString()}
            className="max-w-[900px] lg:min-h-[60dvh] capitalize"
          >
            <h2 className="md:hidden text-2xl font-headers">{item.title}</h2>
            <div className="pb-2">
              <Image src={image} alt="gallery painting" />
            </div>
            <div className="flex justify-between items-center">
              <h2 className="hidden md:block text-4xl font-headers">
                {item.title}
              </h2>
              <div
                className={`${
                  item.status === "disponible" ? "text-success" : "text-warning"
                } md:text-xl font-bold`}
              >
                {item.status}
              </div>
            </div>
            <div className="flex justify-between md:text-xl">
              {item.status !== "vendue" && (
                <div className="md:text-2xl font-bold">{item.price}$</div>
              )}
              <div className="text-gray-300">{item.createdAt}</div>
            </div>
            <div className="flex justify-between md:text-xl text-gray-300">
              <div>{item.dimensions}</div>
              <div>{item.medium}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDetails;
