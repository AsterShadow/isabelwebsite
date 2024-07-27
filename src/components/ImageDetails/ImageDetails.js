"use client";
import React from "react";
import ImageDetailsCarousel from "../ImageDetailsCarousel/ImageDetailsCarousel";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";

const ImageDetails = ({ item }) => {
  return (
    <div className="flex gap-12 w-full">
      {/* <div className="hidden lg:block max-h-[70dvh] overflow-y-scroll fixed custom-scrollbar">
        <ImageDetailsCarousel images={item.images} />
      </div> */}
      <div className="flex flex-col gap-16 px-8 md:m-auto">
        {item.images &&
          item.images.map((image, index) => (
            <div
              key={index}
              className="max-w-[900px] lg:min-h-[60dvh] capitalize"
            >
              <h2 className="md:hidden text-2xl font-headers">{item.name}</h2>
              <div className="pb-2">
                <img src={urlFor(image).url()} alt="gallery painting" />
              </div>
              <h2 className="hidden md:block text-4xl font-headers">
                {item.name}
              </h2>
              {item.status === "disponible" && (
                <>
                  <div className="flex justify-between items-center">
                    <div
                      className={`${
                        item.status === "disponible"
                          ? "text-success"
                          : "text-warning"
                      } md:text-xl font-bold`}
                    >
                      {item.status}
                    </div>
                  </div>
                  <div className="flex justify-between md:text-xl">
                    <div className="md:text-2xl font-bold">{item.price}$</div>
                    <div>{item.dimensions}</div>
                  </div>
                  <div className="flex justify-between md:text-xl text-gray-300">
                    <div className="text-gray-300">{item.createdAt}</div>
                    <div>{item.medium}</div>
                    <div>{item.support}</div>
                  </div>
                </>
              )}
              {item.status === "vendue" && (
                <>
                  <div className="flex justify-between items-center">
                    <div
                      className={`${
                        item.status === "disponible"
                          ? "text-success"
                          : "text-warning"
                      } md:text-xl font-bold`}
                    >
                      {item.status}
                    </div>
                  </div>
                  <div className="flex justify-between md:text-xl">
                    <div className="text-gray-300">{item.createdAt}</div>
                    <div>{item.dimensions}</div>
                  </div>
                  <div className="flex justify-between md:text-xl text-gray-300">
                    <div>{item.medium}</div>
                    <div>{item.support}</div>
                  </div>
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ImageDetails;
