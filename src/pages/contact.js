import ContactForm from "@/components/ContactForm/ContactForm";
import Flowers from "@/components/Flowers/Flowers";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Header";
import LayoutContainer from "@/components/LayoutContainer/LayoutContainer";
import React from "react";

const contact = () => {
  return (
    <>
      <LayoutContainer>
        <Navbar />
        <div className="w-full flex flex-col z-20 items-center justify-center py-36 px-4">
          <h2 className="text-2xl md:text-4xl font-headers">Contactez-moi !</h2>
          <Flowers
            flowerNb={3}
            className="background absolute top-[10%] left-[10%] w-8 lg:w-24 rotate-12"
          />
          <Flowers
            flowerNb={3}
            className="background absolute top-[20%] right-[20%] w-8 lg:w-24 rotate-90"
          />
          <Flowers
            flowerNb={1}
            className="background absolute bottom-[10%] left-[40%] w-8 lg:w-24 rotate-12"
          />
          <Flowers
            flowerNb={3}
            className="background absolute bottom-[20%] right-[30%] w-8 lg:w-24 rotate-90"
          />
          <ContactForm />
        </div>
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default contact;
