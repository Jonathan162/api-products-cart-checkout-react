import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ProductItem from "../components/ProductItem";

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
    <Wrapper>
      {productData.map((product) => (
        <ProductItem key={product.id} product={product} onAdd={onAdd} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  width: 80%;
  margin: 10rem auto;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 80px;
  min-height: 80vh;
`;

export default Products;
