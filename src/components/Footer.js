import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const footerIcon = <FontAwesomeIcon icon={faShoppingCart} size="lg" />;

  return (
    <Wrapper>
      <FooterLayout>
        <div>
          <h3>Kolumn 1</h3>
          <p>
            Lorem Ipsum is simply dummy text of <br />
            the printing and typesetting industry.
          </p>
        </div>
        <div>
          <h3>Kolumn 2 </h3>
          <p>
            Lorem Ipsum is simply dummy text of <br />
            the printing and typesetting industry.
          </p>
        </div>
        <div>
          <h3>Kolumn 3</h3>
          <div className="footer-icon">
            <span>{footerIcon}</span>
            <span>{footerIcon}</span>
            <span>{footerIcon}</span>
          </div>
        </div>
      </FooterLayout>
      <div className="copyright-footer">
        <p>© 2022 - Hantering av personuppgifter - Cookies - Köpvillkor</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #333;
  .copyright-footer p {
    color: white;
    font-size: 0.8rem;
    text-align: center;
    padding-bottom: 1rem;
  }
`;

const FooterLayout = styled.footer`
  display: flex;
  flex-wrap: wrap;
  min-height: 28vh;
  color: white;
  justify-content: space-between;
  width: 80%;
  padding: 4rem 0;
  margin: 0 auto;

  p {
    color: white;
    margin-top: 1.5rem;
    padding: 0;
    font-size: 1.1rem;
  }

  .footer-icon {
    margin-top: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  /*  Media queries */
  @media only screen and (max-width: 845px) {
    justify-content: center;
    flex-direction: column;

    h3 {
      margin-top: 3rem;
    }

    .footer-icon {
      justify-content: flex-start;
    }

    .footer-icon span {
      margin-right: 2rem;
    }
  }
`;

export default Footer;
