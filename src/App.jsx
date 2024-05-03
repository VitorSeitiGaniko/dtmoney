import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./styles/global";
import Header from "./components/Header";

function App() {
  const StyledTitle = styled.h1`
    font-size: 24px;
    color: blue;
    text-align: center;
  `;

  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledTitle>Carol e Vitu</StyledTitle>
    </>
  );
}

export default App
