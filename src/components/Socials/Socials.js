import React from "react";
import Images from "@/assets/images";
import Image from "next/image";
import Link from "next/link";

const Socials = () => {
  return (
    <div className="flex gap-4">
      <Link
        href={`https://www.facebook.com/profile.php?id=100064535749047`}
        target="_blank"
      >
        <Image src={Images.facebook} alt="facebook-icon" />
      </Link>
      <Link href={`https://www.instagram.com/isabelvaldesart/`} target="_blank">
        <Image src={Images.instagram} alt="instagram-icon" />
      </Link>
      <Link href={"/contact"}>
        <Image src={Images.mail} alt="mail-icon" />
      </Link>
    </div>
  );
};


export default Socials;
