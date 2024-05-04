import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "./styles/global";
import Header from "./components/Header";
import Summary from "./components/Summary";
import TransactionsList from "./components/TransactionsList";

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
      <Summary />
      <TransactionsList />
      <StyledTitle>Carol e Vitu</StyledTitle>
    </>
  );
}

export default App
