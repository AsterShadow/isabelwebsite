"use client";

import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`text-center drop-shadow-sm rounded-md px-6 py-3 bg-info transition-all hover:bg-third focus:translate-y-px ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
