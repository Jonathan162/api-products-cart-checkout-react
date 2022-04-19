import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavContainer>
      <h3 id="logo">
        <NavLink to="/">Elektronikbutiken</NavLink>
      </h3>
      <p>Elektronik på nätet sedan 2008</p>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  p {
    font-size: 12px;
    font-style: italic;
    margin-top: 2px;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Nav;
