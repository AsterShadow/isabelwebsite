import Images from "@/assets/images";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button/Button";
import FilterModal from "../FilterModal/FilterModal";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {isOpen && <FilterModal />}
      <Button onClick={handleClick} className="px-3">
        <Image src={Images.sort} alt="sort icon" width={30} />
      </Button>
    </div>
  );
};

export default Filter;
