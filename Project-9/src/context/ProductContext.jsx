import React, { createContext, useEffect, useState } from "react";
import { getAllProductData } from "../api/productApi";

export let ProductDataContext = createContext();

const ProductContext = ({ children }) => {
  const [productData, setProductData] = useState([]);

  const setData = async () => {
    

    setProductData(await getAllProductData());
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <div>
      <ProductDataContext.Provider value={productData}>
        {children}
      </ProductDataContext.Provider>
    </div>
  );
};

export default ProductContext;
