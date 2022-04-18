import React, { useState } from "react";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import CheckOutPage from "./pages/CheckOutPage";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  //function for deleting product object
  const removeProducts = (index) => {
    const allProducts = [...cartItems];
    allProducts.splice(index, 1);
    setCartItems(allProducts);
  };

  //function for adding a product
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
  //function for adding a product
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
  //function for clearing cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header
          cartItems={cartItems}
          setCartItems={setCartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          countCartItems={cartItems.length}
          clearCart={clearCart}
          removeProducts={removeProducts}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Products
                cartItems={cartItems}
                setCartItems={setCartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />
          <Route
            path="/:id"
            element={
              <Product
                cartItems={cartItems}
                setCartItems={setCartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <CheckOutPage
                onAdd={onAdd}
                onRemove={onRemove}
                removeProducts={removeProducts}
                cartItems={cartItems}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
