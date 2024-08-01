"use client";

import React from "react";

const LayoutContainer = ({ children, className }) => {
  return (
    <div className={`container flex min-h-[100dvh] mx-auto ${className || ""}`}>
      {children}
    </div>
  );
};

export default LayoutContainer;
