import React from "react";
import Navbar from "@/components/Header/Header";
import LandingHero from "@/components/LandingHero/LandingHero";
import LayoutContainer from "@/components/LayoutContainer/LayoutContainer";
import HeroImages from "@/components/HeroImages/HeroImages";
import LandingAbout from "@/components/LandingAbout/LandingAbout";
import LandingWork from "@/components/LandingWork/LandingWork";
import Footer from "@/components/Footer/Footer";

const index = () => {
  return (
    <>
      <LayoutContainer>
        <Navbar />
        <div className="w-full flex flex-col z-20 items-center h-full">
          <LandingHero />
          <HeroImages />
          <LandingAbout />
          <LandingWork />
        </div>
      </LayoutContainer>
      <Footer/>
    </>
  );
};

export default index;
