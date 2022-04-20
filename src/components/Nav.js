import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavContainer>
      <h3 id="logo">
        <NavLink to="/">Elektronikbutiken</NavLink>
      </h3>
      <p>Schysst elektronik på nätet sedan 2008!</p>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  p {
    font-size: 12px;
    padding: 0;
    font-style: italic;
    margin-top: 2px;
    color: white;
  }
`;

const NavLink = styled(Link)`
  color: white;

  &:hover {
    text-decoration: underline;
    text-decoration-color: #23d997;
  }
`;

export default Nav;
