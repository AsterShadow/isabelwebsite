"use client";

import React from 'react'

const LayoutContainer = ({children}) => {
  return (
    <div className="container flex min-h-[100dvh] mx-auto">
        {children}
    </div>
  )
}

export default LayoutContainer