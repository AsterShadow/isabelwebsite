"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Images from "@/assets/images";
import Socials from "../Socials/Socials";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { href: "/gallery", title: "Galerie" },
    { href: "/about", title: "Artiste" },
    // { href: "/faq", title: "FAQ" },
    { href: "/contact", title: "Contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed flex items-center justify-between container z-50 py-8 lg:p-8 lg:gap-20 lg:justify-between lg:backdrop-opacity-75 lg:backdrop-blur-sm">
      <Link href="/">
        <span className="px-4 cursor-pointer text-4xl font-headers">
          Isabel
        </span>
      </Link>

      <div className="hidden lg:flex lg:gap-4 text-xl font-headers">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.title}>
            <span
              className={`cursor-pointer ${link.href === pathname ? "text-info" : ""}`}
            >
              {link.title}
            </span>
          </Link>
        ))}
      </div>
      {/* <div className="hidden lg:block cursor-pointer">
        <Image src={Images.cart} alt="menu icon" />
      </div> */}
      <div className="block lg:hidden">
        {!isMobileMenuOpen && (
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center px-3 py-2 text-2xl font-headers"
          >
            <Image src={Images.menu} alt="menu icon" />
          </button>
        )}
      </div>

      <div
        className={
          isMobileMenuOpen
            ? "fixed top-0 right-0 h-full w-3/5 bg-dark shadow-lg z-50"
            : "hidden"
        }
        ref={menuRef}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex items-center px-3 py-4 font-headers"
        >
          <Image src={Images.close} alt="close icon" className="w-10" />
        </button>
        <div className="flex flex-col justify-between p-4 text-2xl text-gold h-[90%]">
          <div className="flex flex-col items-start gap-4 font-headers ">
            {navLinks.map((link) => (
              <Link href={link.href} key={link.title}>
                <span
                  className={`cursor-pointer ${link.href === pathname ? "text-info" : ""}`}
                >
                  {link.title}
                </span>
              </Link>
            ))}
            {/* <div className="bg-info p-3 rounded-full backdrop-blur-lg">
              <Image src={Images.cart} alt="menu icon" />
            </div> */}
          </div>
          <div className="flex flex-col text-xs font-light gap-4 md:hidden">
            <Socials />
            <div>
              <div>Isabel Valdes Laberge</div>
              <div>© All rights reserved</div>
            </div>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
