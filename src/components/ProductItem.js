import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductItem = ({ product, onAdd }) => {
  return (
    <ListItem>
      <Link to={`/${product.id}`}>
        <img src={product.url} alt={product.title} width="250px" />
      </Link>
      <Link to={`/${product.id}`}>
        <h3> {product.title} </h3>
      </Link>
      <span>
        <p>{product.price}:-</p>
      </span>
      <div>
        <button onClick={() => onAdd(product)}>Lägg till i varukorg</button>
      </div>
    </ListItem>
  );
};

const ListItem = styled.li`
  list-style: none;
  background-color: #333;
  padding: 4.2rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 3px;

  h3 {
    padding-top: 3rem;
    color: white;
  }

  p {
    font-size: 19px;
    font-weight: 300;
    color: white;
  }

  button {
    color: white;
  }
`;

export default ProductItem;
