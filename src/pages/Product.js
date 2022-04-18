import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Product({ onAdd }) {
  const [productItemData, setProductItemData] = useState([]);

  let params = useParams();

  const fetchproductItemData = async () => {
    try {
      const response = await fetch(
        `https://codexplained.se/electronics.php?id=${params.id}`
      );
      const data = await response.json();

      setProductItemData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchproductItemData();
  }, []);

  return (
    <Wrapper>
      <img width="600px" src={productItemData.url} />
      <h1>{productItemData.title}</h1>
      <p>{productItemData.price}:-</p>
      <p className="description">{productItemData.description}</p>
      <p className="warehouse-status">
        I lager: <b>{productItemData.storage}</b> st
      </p>
      <button onClick={() => onAdd(productItemData)}>Add To Cart</button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  h1 {
    margin: 40px 0;
  }

  .description {
    max-width: 30%;
    padding: 20px 0;
  }

  .warehouse-status {
    padding: 20px 0;
  }
`;

export default Product;
