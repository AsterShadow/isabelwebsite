import { useRouter } from "next/router";
import React from "react";

const Product = () => {
  const router = useRouter();
  const { slug } = router.query;
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
  return <div></div>;
};

export default Product;
