import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProductItem = ({ product, onAdd }) => {
  return (
    <ListItem>
      <Link to={`/${product.id}`}>
        <img src={product.url} alt={product.title} width="250px" />
      </Link>
      <h3>
        {" "}
        <Link to={`/${product.id}`}>{product.title}</Link>
      </h3>
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
  padding: 60px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 3px;

  h3 {
    margin: 10px 0;
  }

  p {
    font-size: 19px;
    font-weight: 300;
  }

  a,
  a:visited {
    text-decoration: none;
    color: #222;
  }

  button {
    margin-top: 20px;
    background-color: #0276ff;
    border-radius: 3px;
    border-style: none;
    box-shadow: rgba(255, 255, 255, 0.26) 0 1px 2px inset;
    padding: 10px 21px;
    color: #fff;
    cursor: pointer;
  }
`;

export default ProductItem;
