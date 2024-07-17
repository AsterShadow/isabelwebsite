"use client";
import Images from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const GalleryImages = () => {
  const router = useRouter();

  const placeholders = [
    {
      slug: "douceur-et-volupte",
      image: Images.landing1,
      title: "Douceur et volupté",
      price: 150,
      createdAt: 2023,
      dimensions: "20 x 28 pouces",
      status: "vendue",
      medium: "acrylique",
    },
    {
      slug: "calm-lake",
      image: Images.landing2,
      title: "Calm Lake",
      price: 320,
      createdAt: 2024,
      dimensions: "20 x 28 pouces",
      status: "vendue",
      medium: "acrylique",
    },
    {
      slug: "dream-of-india",
      image: Images.landing3,
      title: "Dream of India",
      price: 500,
      createdAt: 2024,
      dimensions: "20 x 28 pouces",
      status: "disponible",
      medium: "acrylique",
    },
    {
      slug: "douceur-et-volupte",
      image: Images.landing4,
      title: "Douceur et volupté",
      price: 450,
      createdAt: 2022,
      dimensions: "20 x 28 pouces",
      status: "disponible",
      medium: "acrylique",
    },
    {
      slug: "douceur-et-volupte",
      image: Images.landing1,
      title: "Douceur et volupté",
      price: 150,
      createdAt: 2023,
      dimensions: "20 x 28 pouces",
      status: "vendue",
      medium: "acrylique",
    },
    {
      slug: "calm-lake",
      image: Images.landing2,
      title: "Calm Lake",
      price: 320,
      createdAt: 2024,
      dimensions: "20 x 28 pouces",
      status: "vendue",
      medium: "acrylique",
    },
    {
      slug: "dream-of-india",
      image: Images.landing3,
      title: "Dream of India",
      price: 500,
      createdAt: 2024,
      dimensions: "20 x 28 pouces",
      status: "disponible",
      medium: "acrylique",
    },
    {
      slug: "douceur-et-volupte",
      image: Images.landing4,
      title: "Douceur et volupté",
      price: 450,
      createdAt: 2022,
      dimensions: "20 x 28 pouces",
      status: "disponible",
      medium: "acrylique",
    },
  ];
  return (
    <div className="full columns-2 2xl:columns-3 px-2">
      {placeholders.map((image, index) => (
        <Link href={`/product/${image.slug}`}>
          <div key={index} className="w-full h-auto object-cover py-2">
            <Image src={image.image} alt="gallery painting" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GalleryImages;
