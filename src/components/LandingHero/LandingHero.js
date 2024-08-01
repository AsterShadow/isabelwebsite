"use client";
import React from "react";
import Button from "../Button/Button";
import Link from "next/link";

const LandingHero = () => {
  return (
    <div className="flex flex-col justify-center pt-64 md:pt-0 lg:items-center md:h-[100dvh]">
      <div className="flex flex-col p-4 lg:p-0">
        <h1 className="font-headers text-5xl md:text-8xl image-text lg:text-[156px]">
          Isabel Valdes
        </h1>
        <h3 className="font-headers md:text-3xl">Artiste-Peintre</h3>
        <div className="lg:self-end pt-16">
          <Link href="/gallery">
            <Button className="text-xl max-w-48">Voir Galerie</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
