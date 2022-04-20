import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <FooterLayout>
        <div>
          <h3>About</h3>
          <p>
            Lorem Ipsum is simply dummy text of <br />
            the printing and typesetting industry.
          </p>
        </div>
        <div>
          {" "}
          <h3>Links</h3>
        </div>
        <div>
          {" "}
          <h3>Follow us</h3>
        </div>
      </FooterLayout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #333;
`;

const FooterLayout = styled.footer`
  display: flex;
  min-height: 20vh;
  color: white;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

export default Footer;
