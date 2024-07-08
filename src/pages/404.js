import Navbar from "@/components/Header/Header";
import LayoutContainer from "@/components/LayoutContainer/LayoutContainer";
import React from "react";

const Custom404 = () => {
  return (
    <LayoutContainer>
      <Navbar />
      <div>
        <p>404 error</p>
      </div>
    </LayoutContainer>
  );
};

export default Custom404;
