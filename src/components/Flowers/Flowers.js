import Images from "@/assets/images";
import Image from "next/image";
import React from "react";

const Flowers = ({ flowerNb, ...props }) => {
  const flowers = [
    Images.flower1,
    Images.flower2,
    Images.flower3,
    Images.flower4,
    Images.flower5,
  ];
  return (
    <div {...props}>
      {flowerNb && (
        <Image
          src={flowers[flowerNb]}
          width={80}
          alt="flower-img"
        />
      )}
    </div>
  );
};

export default Flowers;
