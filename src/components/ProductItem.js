import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductItem = ({ product, onAdd }) => {
  return (
    <ListItem>
      <img src={product.url} alt={product.title} width="250px" />
      <h3>
        {" "}
        <Link to={`/${product.id}`}>{product.title}</Link>
      </h3>
      <div>€{product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </ListItem>
  );
};

const ListItem = styled.li`
  list-style: none;
  padding: 60px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  button {
    background-color: #0276ff;
    border-radius: 8px;
    border-style: none;
    box-shadow: rgba(255, 255, 255, 0.26) 0 1px 2px inset;
    padding: 10px 21px;
    color: #fff;
    cursor: pointer;
  }
`;

export default ProductItem;
