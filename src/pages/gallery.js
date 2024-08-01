import Filter from "@/components/Filter/Filter";
import GalleryImages from "@/components/GalleryImages/GalleryImages";
import Navbar from "@/components/Header/Header";
import LayoutContainer from "@/components/LayoutContainer/LayoutContainer";
import React, { useEffect, useState } from "react";
import { getPaintings } from "./api/painting";
import Footer from "@/components/Footer/Footer";

const gallery = () => {
  const [paintings, setPaintings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPaintings();
      setPaintings(data || []);
    };
    fetchData();
  }, []);

  return (
    <>
      <LayoutContainer>
        <Navbar />
        <div className="w-full flex flex-col z-20 items-center h-full pt-48 pb-24">
          <GalleryImages images={paintings} />
        </div>
      </LayoutContainer>
      {/* <div className="fixed right-5 bottom-5 z-30">
        <Filter />
      </div> */}
      <Footer />
    </>
  );
};

export default gallery;
