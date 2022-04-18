import React from "react";
import styled from "styled-components";
import Cart from "./Cart";
import Nav from "./Nav";

const Header = ({
  cartItems,
  setCartItems,
  onAdd,
  onRemove,
  countCartItem,
  clearCart,
  removeProducts,
}) => {
  return (
    <Wrapper>
      <HeaderLayout>
        <Nav />
        <div>
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            countCartItem={countCartItem}
            clearCart={clearCart}
            removeProducts={removeProducts}
          />
        </div>
      </HeaderLayout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #222;
`;

const HeaderLayout = styled.header`
  display: flex;
  min-height: 10vh;
  color: white;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;

  ul {
    display: flex;
  }

  li {
    list-style: none;
    padding: 0 20px;
  }
`;

export default Header;
