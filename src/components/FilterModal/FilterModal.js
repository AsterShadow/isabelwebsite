import React from "react";

const FilterModal = () => {
  const filter = {
    dimensions: ["petit", "moyen", "grand"],
    medium: ["Acrylique"],
    support: ["Toile galerie", "Toile régulière", "Carton toilée"],
    price: { from: 150, to: 1000 },
    status: ["vendue", "disponible"],
  };
  return (
    <div className="bg-main ">
      <div></div>
    </div>
  );
};

export default FilterModal;
