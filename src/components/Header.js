import React from "react";
import styled from "styled-components";
import Cart from "./Cart";
import Nav from "./Nav";

const Header = ({
  cartItems,
  setCartItems,
  onAdd,
  onRemove,
  clearCart,
  removeProducts,
}) => {
  return (
    <DivWrapper>
      <HeaderLayout>
        <Nav />
        <div>
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            clearCart={clearCart}
            removeProducts={removeProducts}
          />
        </div>
      </HeaderLayout>
    </DivWrapper>
  );
};

const DivWrapper = styled.div`
  background-color: #333;
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
`;

const HeaderLayout = styled.header`
  display: flex;
  min-height: 10vh;
  color: white;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

export default Header;
