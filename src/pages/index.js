import React from "react";
import Navbar from "@/components/Header/Header";
import LandingHero from "@/components/LandingHero/LandingHero";
import LayoutContainer from "@/components/LayoutContainer/LayoutContainer";
import HeroImages from "@/components/HeroImages/HeroImages";
import LandingAbout from "@/components/LandingAbout/LandingAbout";
import LandingWork from "@/components/LandingWork/LandingWork";
import Footer from "@/components/Footer/Footer";
import Flowers from "@/components/Flowers/Flowers";

const index = () => {
  return (
    <>
      <Flowers flowerNb={3} className="background absolute top-[10%] left-[10%] w-8 lg:w-24 rotate-12" />
      <Flowers flowerNb={3} className="background absolute top-[20%] right-[20%] w-8 lg:w-24 rotate-90" />
      <Flowers flowerNb={1} className="background absolute top-[45%] lg:top-[60%] left-[30%] w-8 lg:w-24" />
      <LayoutContainer>
        <Navbar />
        <div className="w-full flex flex-col z-20 items-center h-full">
          <LandingHero />
          <HeroImages />
          <LandingAbout />
          <LandingWork />
        </div>
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default index;
