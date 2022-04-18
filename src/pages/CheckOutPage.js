import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CheckOutPage = ({ cartItems, onAdd, onRemove }) => {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <div>
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && (
          <div>
            Cart is empty
            <br />
            <button>
              <BtnLink to="/">Back to home</BtnLink>
            </button>
          </div>
        )}
        {cartItems.map((item) => (
          <div key={item.id}>
            <div>{item.title}</div>
            <img src={item.url} width="200px" />
            <div>
              <button onClick={() => onAdd(item)}>+</button>{" "}
              <button onClick={() => onRemove(item)}>-</button>
            </div>

            <div>
              {item.qty} x €{item.price.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      {cartItems.length !== 0 && (
        <>
          <div>
            <br />
            <br />
            <div>
              <strong>Total Price</strong>
            </div>
            <div>
              <strong>€{totalPrice.toFixed(2)}</strong>
            </div>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

const BtnLink = styled(Link)`
  text-decoration: none;
  color: #222;
`;

export default CheckOutPage;
