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
              <h2>Varukorg ({cartItems.length})</h2>
              <div>
                {cartItems.length === 0 && <div>Varukorgen är tom...</div>}
                {cartItems.map((item) => (
                  <Table key={item.id}>
                    <div>
                      <img src={item.url} width="60px" alt={item.title} />{" "}
                    </div>
                    <div>{item.title}</div>
                    <div>
                      <button onClick={() => onAdd(item)}>+</button>{" "}
                      <button onClick={() => onRemove(item)}>-</button>
                    </div>
                    {<button onClick={() => removeProducts(item)}>x</button>}
                    <div>
                      {item.qty} x {item.price}:-
                    </div>
                  </Table>
                ))}
              </div>
              {cartItems.length !== 0 && (
                <>
                  <hr />
                  <div>
                    <span>
                      <p>
                        Totalt pris: <strong>{totalPrice}:-</strong>
                      </p>
                    </span>
                  </div>
                  <hr />
                  <div>
                    <button onClick={() => newTest()}>
                      {" "}
                      <Link to="/checkout">Gå till checkout</Link>
                    </button>
                    <button onClick={() => doubleFunction()}>
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

const Table = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 460px;
  border-bottom: 1px solid #222;
  margin: 15px 0;
  padding-bottom: 5px;

  button {
    padding: 5px;
  }
`;

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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    margin: 20px 0;
  }

  a {
    color: #222;
    text-decoration: none;
  }

  button {
    padding: 5px;
    margin: 20px 0 10px 10px;
  }

  p {
    margin-top: 25px;
  }
`;

export default Cart;
