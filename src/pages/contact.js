import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Header";
import LayoutContainer from "@/components/LayoutContainer/LayoutContainer";
import React from "react";

const contact = () => {
  return (
    <>
      <LayoutContainer>
        <Navbar />
        <div className="w-full flex flex-col z-20 items-center h-full py-36">
          <h2 className="text-2xl md:text-4xl font-headers">Contactez-moi !</h2>
          <ContactForm />
        </div>
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default contact;
