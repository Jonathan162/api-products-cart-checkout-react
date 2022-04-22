import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProductItem from "../components/ProductItem";
import { motion } from "framer-motion";
import { PageAnimation } from "./Animation";

const Products = ({ onAdd }) => {
  const [productData, setProductData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://codexplained.se/electronics.php");
      const data = await response.json();

      setProductData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <UlWrapper
        exit="exit"
        variants={PageAnimation}
        initial="hidden"
        animate="show"
      >
        {productData.map((product) => (
          <ProductItem key={product.id} product={product} onAdd={onAdd} />
        ))}
      </UlWrapper>
    </main>
  );
};

const UlWrapper = styled(motion.ul)`
  width: 80%;
  margin: 10rem auto;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 5rem;
  min-height: 80vh;
`;

export default Products;
