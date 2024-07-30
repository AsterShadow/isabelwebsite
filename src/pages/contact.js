import ContactForm from "@/components/ContactForm/ContactForm";
import Navbar from "@/components/Header/Header";
import LayoutContainer from "@/components/LayoutContainer/LayoutContainer";
import React from "react";

const contact = () => {
  return (
    <LayoutContainer>
      <Navbar />
      <div className="w-full flex flex-col z-20 items-center h-full py-36">
        <ContactForm />
      </div>
    </LayoutContainer>
  );
};

export default contact;
