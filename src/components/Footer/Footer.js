import Link from "next/link";
import React from "react";

const Footer = () => {
  const navLinks = [
    { href: "/gallery", title: "Galerie" },
    { href: "/about", title: "Artiste" },
    { href: "/faq", title: "FAQ" },
    { href: "/contact", title: "Contact" },
  ];
  return (
    <div className="hidden w-screen h-32 bg-info md:flex items-center justify-around">
      <div>
        <div>Socials</div>
      </div>
      <div className="flex gap-8">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.title}>
            <span className="cursor-pointer">{link.title}</span>
          </Link>
        ))}
      </div>
      <div className="text-xs">
        <div>Isabel Valdes Laberge</div>
        <div>© All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
