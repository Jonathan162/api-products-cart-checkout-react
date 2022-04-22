import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { PageAnimation } from "./Animation";

const Checkout = ({ cartItems, onAdd, onRemove, removeProducts }) => {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <DivWrapper
      exit="exit"
      variants={PageAnimation}
      initial="hidden"
      animate="show"
    >
      {cartItems.length === 1 ? (
        <h1>Du har valt {cartItems.length} produkt </h1>
      ) : (
        <h1>Du har valt {cartItems.length} produkter </h1>
      )}
      <div>
        {cartItems.length === 0 && (
          <div>
            <p>Här var det tomt!</p>
            <Link to="/">
              <button>Till startsidan</button>
            </Link>
          </div>
        )}
        <table>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="product-foto">
                  <img src={item.url} width="200px" alt={item.title} />
                </td>
                <td>
                  <h3>{item.title}</h3>
                </td>
                <td>
                  <button className="action-btn" onClick={() => onAdd(item)}>
                    +
                  </button>
                  <button className="action-btn" onClick={() => onRemove(item)}>
                    -
                  </button>
                </td>
                <td>
                  <p>
                    {item.qty} x {item.price}:-
                  </p>
                </td>
                <td>
                  {
                    <button
                      className="remove-item-btn"
                      onClick={() => removeProducts(item)}
                    >
                      Ta bort
                    </button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {cartItems.length !== 0 && (
        <PriceContainer>
          <div>
            <p>
              Totalt pris: <b>{totalPrice}:-</b>
            </p>
          </div>

          <button onClick={() => alert("Skickar vidare till betalning")}>
            Till betalning
          </button>
          <hr />
        </PriceContainer>
      )}
    </DivWrapper>
  );
};

const DivWrapper = styled(motion.div)`
  min-height: 100vh;
  max-width: 60rem;
  margin: 0 auto;
  margin-top: 10rem;

  table {
    border-collapse: collapse;
    margin: 0.3rem 0;
    font-size: 0.9em;
    width: 100%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }

  table tbody tr {
    border-bottom: 3px solid #dddddd;
  }

  table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  tr > *:not(:first-child) {
    text-align: center;
  }

  h1 {
    text-align: center;
    font-weight: lighter;
    margin: 4rem 0;
  }

  h3 {
    font-weight: lighter;
  }

  .action-btn {
    max-width: 2rem;
    padding: 0.3rem;
  }

  .remove-item-btn {
    padding: 0.6rem;
  }

  .product-foto img {
    margin-bottom: -3.55px;
  }

  /*  Media queries */
  @media only screen and (max-width: 950px) {
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    tr {
      border: 1px solid #ccc;
    }

    td {
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
    }

    td:before {
      position: absolute;
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    .product-foto {
      text-align: center;
    }
  }
`;

const PriceContainer = styled.div`
  margin: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Checkout;
