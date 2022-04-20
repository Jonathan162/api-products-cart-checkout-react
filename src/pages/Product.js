import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
      <h3>{productItemData.price}:-</h3>
      <p className="description">{productItemData.description}</p>
      <p className="warehouse-status">
        I lager: <b>{productItemData.storage}</b> st
      </p>
      <div className="action-btn">
        <button onClick={() => onAdd(productItemData)}>
          Lägg till i varukorgen
        </button>
        <Link to="/">
          <button>Tillbaka</button>
        </Link>
      </div>
      {/* { ...productItemData,
      storage: productItemData.storage - 1,
    }
 */}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;

  img {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-top: 4rem;
  }

  h1 {
    margin: 3rem 0;
  }

  h3 {
    font-weight: lighter;
  }

  .description {
    max-width: 30%;
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
    margin: 0 1rem;
  }
`;

export default Product;
