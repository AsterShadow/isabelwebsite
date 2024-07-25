import Images from "@/assets/images";
import Navbar from "@/components/Header/Header";
import ImageDetails from "@/components/ImageDetails/ImageDetails";
import LayoutContainer from "@/components/LayoutContainer/LayoutContainer";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getDataPainting } from "../api/painting";

const Product = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [painting, setPainting] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataPainting(slug);
      setPainting(data[0] || {});
      console.log(painting.images);
    };
    if (slug) {
      fetchData();
    }
  }, [slug]);

  return (
    <>
      <LayoutContainer>
        <Navbar />
        <div className="w-full flex flex-col z-20 items-center h-full py-36">
          <ImageDetails item={painting} />
        </div>
      </LayoutContainer>
    </>
  );
};

export default Product;
