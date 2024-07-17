import Images from "@/assets/images";
import Navbar from "@/components/Header/Header";
import ImageDetails from "@/components/ImageDetails/ImageDetails";
import LayoutContainer from "@/components/LayoutContainer/LayoutContainer";
import { useRouter } from "next/router";
import React from "react";

const Product = () => {
  const router = useRouter();
  const { slug } = router.query;
  const placeholders = [
    {
      slug: "douceur-et-volupte",
      main: Images.landing1,
      images: [
        Images.landing1,
        Images.landing2,
        Images.landing3,
        Images.landing4,
      ],
      title: "Douceur et volupté",
      price: 150,
      createdAt: 2023,
      dimensions: "20 x 28 pouces",
      status: "vendue",
      medium: "acrylique",
    },
    {
      slug: "calm-lake",
      main: Images.landing2,
      images: [
        Images.landing1,
        Images.landing2,
        Images.landing3,
        Images.landing4,
      ],
      title: "Calm Lake",
      price: 320,
      createdAt: 2024,
      dimensions: "20 x 28 pouces",
      status: "vendue",
      medium: "acrylique",
    },
    {
      slug: "dream-of-india",
      main: Images.landing3,
      images: [
        Images.landing1,
        Images.landing2,
        Images.landing3,
        Images.landing4,
      ],
      title: "Dream of India",
      price: 500,
      createdAt: 2024,
      dimensions: "20 x 28 pouces",
      status: "disponible",
      medium: "acrylique",
    },
    {
      slug: "douceur-et-volupte",
      main: Images.landing4,
      images: [
        Images.landing1,
        Images.landing2,
        Images.landing3,
        Images.landing4,
      ],
      title: "Douceur et volupté",
      price: 450,
      createdAt: 2022,
      dimensions: "20 x 28 pouces",
      status: "disponible",
      medium: "acrylique",
    },
  ];
  const placeholder = placeholders.find(
    (placeholder) => placeholder.slug === slug
  );
  return (
    <>
      <LayoutContainer>
        <Navbar />
        <div className="w-full flex flex-col z-20 items-center h-full pt-48">
          <ImageDetails item={placeholder} />
        </div>
      </LayoutContainer>
    </>
  );
};

export default Product;
