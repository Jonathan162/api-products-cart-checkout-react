import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CartPopUp from "./CartPopUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ onRemove, onAdd, cartItems, clearCart, removeProducts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const shoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} size="lg" />;

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalPrice = itemsPrice;

  const doubleFunction = () => {
    clearCart();
    setIsOpen(!isOpen);
  };

  const newTest = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <CartNotification onClick={togglePopup}>
        {shoppingCartIcon}
        {cartItems.length ? (
          <div className="cart-items">({cartItems.length})</div>
        ) : (
          ""
        )}{" "}
      </CartNotification>

      {isOpen && (
        <CartPopUp
          content={
            <CartLayout>
              <h2>Cart Items</h2>
              <div>
                {cartItems.length === 0 && <div>Cart is empty</div>}
                {cartItems.map((item) => (
                  <div key={item.id}>
                    <img src={item.url} width="60px" />
                    <div>{item.title}</div>
                    <div>
                      <button onClick={() => onAdd(item)}>+</button>{" "}
                      <button onClick={() => onRemove(item)}>-</button>
                    </div>
                    {<button onClick={() => removeProducts(item)}>X</button>}
                    <div>
                      {item.qty} x €{item.price.toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              {cartItems.length !== 0 && (
                <>
                  <hr />
                  <div>
                    <div>
                      <strong>Total Price</strong>
                    </div>
                    <div>
                      <strong>€{totalPrice.toFixed(2)} </strong>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <button onClick={() => newTest()}>
                      {" "}
                      <Link to="/checkout">Proceed to Checkout</Link>
                    </button>
                    <button onClick={() => doubleFunction()}>Empty Cart</button>
                  </div>
                </>
              )}
            </CartLayout>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
};

const CartNotification = styled.div`
  display: flex;
  min-width: 50px;
  justify-content: flex-end;

  .cart-items {
    margin-left: 5px;
    font-size: 19px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const CartLayout = styled.div`
  border: 1px solid #222;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  a {
    color: #222;
    text-decoration: none;
  }
`;

export default Cart;
