import React from "react";
import Navbar from "@/components/Header/Header";
import LayoutContainer from "@/components/LayoutContainer/LayoutContainer";
import Footer from "@/components/Footer/Footer";
import AboutLayout from "@/components/AboutLayout/AboutLayout";

const about = () => {
  return (
    <>
      <LayoutContainer>
        <Navbar />
        <div className="w-full flex flex-col z-20 items-center h-full py-36">
          <AboutLayout />
        </div>
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default about;
