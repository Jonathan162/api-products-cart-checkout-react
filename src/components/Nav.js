import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <nav>
      <h3 id="logo">
        <NavLink to="/">The Electronic Store</NavLink>
      </h3>
    </nav>
  );
};

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Nav;
