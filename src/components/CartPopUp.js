import React from "react";
import styled from "styled-components";

const Popup = ({ handleClose, content }) => {
  return (
    <PopUpBox>
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        {content}
      </div>
    </PopUpBox>
  );
};

const PopUpBox = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  color: #222;

  .box {
    position: relative;
    width: 60%;
    margin: 0 auto;
    height: auto;
    max-height: 80vh;
    margin-top: calc(100vh - 85vh - 20px);
    background: #fff;
    border-radius: 4px;
    padding: 1.3rem;
    border: 1px solid #999;
    overflow: auto;
  }

  .close-icon {
    content: "x";
    cursor: pointer;
    position: fixed;
    right: calc(21% - 28px);
    top: calc(100vh - 85vh - 33px);
    background: #ededed;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    line-height: 20px;
    text-align: center;
    border: 1px solid #999;
    font-size: 20px;
  }
`;

export default Popup;
