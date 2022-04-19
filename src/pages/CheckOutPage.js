import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CheckOutPage = ({ cartItems, onAdd, onRemove, removeProducts }) => {
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  return (
    <Wrapper>
      <h1>You have {cartItems.length} products</h1>
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
        <table>
          <thead></thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td className="product-foto">
                  <img src={item.url} width="200px" alt={item.title} />{" "}
                </td>
                <td>
                  <h2>{item.title}</h2>
                </td>
                <td>
                  <button onClick={() => onAdd(item)}>+</button>{" "}
                  <button onClick={() => onRemove(item)}>-</button>
                </td>
                <td>
                  {item.qty} x {item.price}:-
                </td>
                <td>
                  {<button onClick={() => removeProducts(item)}>x</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {cartItems.length !== 0 && (
        <PriceContainer>
          <br />
          <br />
          <div>
            Totalt pris: <strong>{totalPrice}:-</strong>
          </div>
          <div>
            <button onClick={() => alert("Skickar vidare till betalning")}>
              Till betalningen
            </button>
          </div>
          <hr />
        </PriceContainer>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 960px;
  margin: auto;

  table {
    border-collapse: collapse;
    margin: 5px 0;
    font-size: 0.9em;
    width: 960px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }

  table tbody tr {
    border-bottom: 3px solid #dddddd;
  }

  table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  h1 {
    text-align: center;
    margin: 40px 0;
  }

  button {
    padding: 5px;
  }

  .product-foto {
    display: flex;
  }
`;

const BtnLink = styled(Link)`
  text-decoration: none;
  color: #222;
`;

const PriceContainer = styled.div`
  margin: 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default CheckOutPage;
