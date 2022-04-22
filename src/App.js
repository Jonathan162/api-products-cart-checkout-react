import React, { useState } from "react";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Header from "./components/Header";
import { Routes, Route, useLocation } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import { AnimatePresence } from "framer-motion";

function App() {
  //getting location for page transition exit on componentDidUnmount
  const location = useLocation();

  //state for managing cart/checkout page
  const [cartItems, setCartItems] = useState([]);

  //fn for adding/increasing to cart
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  //fn for removing/reducing an existing product
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  //fn for deleting the selected product object from array
  const removeProducts = (item) => {
    setCartItems(cartItems.filter((x) => x.id !== item.id));
  };

  //fn for clearing the array
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Header
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        clearCart={clearCart}
        removeProducts={removeProducts}
      />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Products
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />
          <Route path="/:id" element={<Product onAdd={onAdd} />} />
          <Route
            path="/checkout"
            element={
              <Checkout
                onAdd={onAdd}
                onRemove={onRemove}
                removeProducts={removeProducts}
                cartItems={cartItems}
              />
            }
          />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
