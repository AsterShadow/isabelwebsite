import GalleryImages from "@/components/GalleryImages/GalleryImages";
import Navbar from "@/components/Header/Header";
import LayoutContainer from "@/components/LayoutContainer/LayoutContainer";
import React from "react";

const gallery = () => {
  return (
    <>
      <LayoutContainer>
        <Navbar />
        <div className="w-full flex flex-col z-20 items-center h-full pt-48">
          <GalleryImages />
        </div>
      </LayoutContainer>
    </>
  );
};

export default gallery;
