import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

button {
  font-weight: lighter;
  font-size: 1rem; 
  cursor: pointer;
  padding: 1rem 2rem;
  border: 1px solid #23d997;
  background: transparent;
  color: #333;
  transition: all 0.5s ease;

  &:hover {
    background-color: #23d997;
    color: white;
  }
}

h1 {
  font-size: 3rem;
}

h2 {
  font-weight: lighter;
  font-size: 2.2rem;
}

h3 {
  font-size: 1.8rem;
}

p {
  padding: 1.8rem 0rem;
  color: #222;
  font-size: 1.4rem;
  line-height: 150%;
}

a {
  text-decoration: none;
  color: #222;

  &:hover {
  cursor: pointer;
  }

  &:visited {
  text-decoration: none;
  }
}`;

export default GlobalStyle;
