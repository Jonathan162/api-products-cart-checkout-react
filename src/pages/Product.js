import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageAnimation } from "./Animation";

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
    <MainWrapper
      variants={PageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <img src={productItemData.url} alt={productItemData.title} />
      <h1>{productItemData.title}</h1>
      <h3>{productItemData.price}:-</h3>
      <p className="description">{productItemData.description}</p>
      <p className="warehouse-status">
        I lager: <b>{productItemData.storage}</b> st
      </p>
      <div className="action-btn">
        <button onClick={() => onAdd(productItemData)}>
          Lägg i varukorgen
        </button>
        <Link to="/">
          <button>Tillbaka</button>
        </Link>
      </div>
    </MainWrapper>
  );
}

const MainWrapper = styled(motion.main)`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;

  img {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-top: 4rem;
    width: 30rem;
  }

  h1 {
    margin: 3rem 0;
  }

  h3 {
    font-weight: lighter;
  }

  .description {
    width: 40%;
    margin-top: 0.5rem;
    padding: 1.2rem 0;
  }

  .warehouse-status {
    padding: 1.2rem 0;
  }

  .action-btn {
    margin: 2rem 0;
  }

  .action-btn button {
    margin: 2rem;
  }

  /*  Media queries */
  @media only screen and (max-width: 820px) {
    .description {
      width: 100%;
      padding: 2rem;
    }
    img {
      background-position: center;
      width: 20rem;
    }
  }
`;

export default Product;
