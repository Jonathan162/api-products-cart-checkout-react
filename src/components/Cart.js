import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CartPopUp from "./CartPopUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartListItem from "./CartListItem";

const Cart = ({ onRemove, onAdd, cartItems, clearCart, removeProducts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const shoppingCartIcon = <FontAwesomeIcon icon={faShoppingCart} size="lg" />;

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const clearSetToggle = () => {
    clearCart();
    setIsOpen(!isOpen);
  };

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const totalPrice = itemsPrice;

  return (
    <div>
      <CartNotification onClick={togglePopup}>
        {shoppingCartIcon}
        {cartItems.length ? (
          <div className="cart-items">({cartItems.length})</div>
        ) : (
          ""
        )}
      </CartNotification>

      {isOpen && (
        <CartPopUp
          content={
            <CartLayout>
              <h2>Varukorg ({cartItems.length})</h2>

              {cartItems.length === 0 && (
                <div>
                  <p>Här var det tomt!</p>
                  <button onClick={() => setIsOpen(!isOpen)}>Återgå</button>
                </div>
              )}
              <ul>
                {cartItems.map((item) => (
                  <CartListItem
                    item={item}
                    key={item.id}
                    onRemove={onRemove}
                    onAdd={onAdd}
                    removeProducts={removeProducts}
                  />
                ))}
              </ul>
              {cartItems.length !== 0 && (
                <>
                  <div>
                    <span>
                      <p>
                        Att betala: <strong>{totalPrice}:-</strong>
                      </p>
                    </span>
                  </div>
                  <div className="cart-btns">
                    <Link to="/checkout">
                      <button onClick={() => setIsOpen(!isOpen)}>
                        {" "}
                        Gå till checkout
                      </button>
                    </Link>
                    <button onClick={() => clearSetToggle()}>
                      Töm varukorg
                    </button>
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
  min-width: 3rem;
  justify-content: flex-end;

  &:hover {
    cursor: pointer;
  }

  .cart-items {
    margin-left: 0.3rem;
    font-size: 1.2rem;
    color: #23d997;
  }
`;

const CartLayout = styled.div`
  h2 {
    margin: 0.8rem 0;
  }

  p {
    font-size: 1.4rem;
  }

  .cart-btns {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }
`;

export default Cart;
