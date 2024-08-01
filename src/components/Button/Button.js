"use client";

import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`text-center text-md drop-shadow-sm rounded-md p-3 bg-third transition-all hover:bg-info focus:translate-y-px ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
