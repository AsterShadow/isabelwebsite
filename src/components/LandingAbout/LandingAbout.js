"use client";

import React from "react";
import Image from "next/image";
import Images from "@/assets/images";
import Link from "next/link";
import Button from "../Button/Button";

const LandingAbout = () => {
  return (
    <div className="px-4 md:px-0 flex flex-col md:items-center justify-center w-full pt-48 gap-16">
      <h2 className="font-headers text-3xl md:text-6xl">À propos de moi</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <Image src={Images.isabel} alt="isabel-picture" />
        <div className="flex flex-col max-w-[480px] gap-4">
          <p>Bienvenue sur mon site web!</p>
          <p>
            Je suis Isabel Valdes Laberge, artiste peintre autodidacte née en
            1976 à Québec avec une passion pour la peinture
            abstraite-intuitive-expressive.
          </p>
          <p>Bonne découverte de mes œuvres!</p>
          <Link href="/about">
            <Button className="text-xl max-w-48">En savoir plus</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
