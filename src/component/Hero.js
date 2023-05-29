import React from "react";
import logo from "../assets/favicon.ico";
import "../App.css";
import styled from "styled-components";
function Hero() {
  const Header = styled.header`
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  

  `;
      const Container= styled.div`

width: 500px;
@media (max-width: 768px) {
      width: 300px;
    }

      `



  return (
    <Container>
      <Header>
        <img src={logo} alt="Logo" />
        <button className="black_btn">Githup</button>
      </Header>
      <h1 className="head_text">
        summariaize articales with{" "}
        <span className="orange_gradient">open ai chat-gpt 4</span>
      </h1>
      <p className="desc">simplify your reacding  with transform lenghty articels into clear and concise summaries</p>
      </Container>
  );
}

export default Hero;
