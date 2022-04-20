import React from "react";
import styled from "styled-components";

const CartListItem = ({ item, onRemove, onAdd, removeProducts }) => {
  return (
    <ListItem key={item.id}>
      <div>
        <img src={item.url} width="60px" alt={item.title} />{" "}
      </div>
      <div>{item.title}</div>
      <div>
        <button className="action-btn" onClick={() => onAdd(item)}>
          +
        </button>{" "}
        <button className="action-btn" onClick={() => onRemove(item)}>
          -
        </button>
      </div>
      <div>
        {item.qty} x {item.price}:-
      </div>
      {
        <button className="action-btn" onClick={() => removeProducts(item)}>
          x
        </button>
      }
    </ListItem>
  );
};

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #2222222f;
  margin: 1.3rem 0;
  padding-bottom: 0.8rem;

  & > * {
    flex-basis: 100%;
  }

  .action-btn {
    max-width: 2rem;
    padding: 0.3rem;
  }
`;

export default CartListItem;
