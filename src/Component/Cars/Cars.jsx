/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../GlobalContextAPI/GlobalContext";

const Cars = () => {
  const { bmw, rolls, selectedProduct, setSelectedProduct } =
    useContext(ProductContext);
  const [showRolls, setShowRolls] = useState(false);

  useEffect(() => {
    setSelectedProduct(bmw);
  }, [setSelectedProduct]);

  const handleShowRolls = () => {
    setShowRolls(true);
    setSelectedProduct(rolls);
  };

  const handleShowBMW = () => {
    setShowRolls(false);
    setSelectedProduct(bmw);
  };

  return (
    <>
      <button onClick={handleShowBMW}>Show BMW</button>
      <button onClick={handleShowRolls}>Show Rolls</button>

      {selectedProduct.map((product) => (
        <li key={product.id}>
          <img src={product.img} alt={product.name} />
          <p>{product.name}</p>
        </li>
      ))}
    </>
  );
};

export default Cars;
