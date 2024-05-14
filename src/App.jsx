import { React, useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./styles/global";
import Header from "./components/Header";
import Summary from "./components/Summary";
import TransactionsList from "./components/TransactionsList";
import Modal from "react-modal";
import NewTransactionModal from "./components/NewTransactionModal";

function App() {
  const StyledTitle = styled.h1`
    font-size: 24px;
    color: blue;
    text-align: center;
  `;

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Summary />
      <TransactionsList />
      <StyledTitle>Carol e Vitu</StyledTitle>
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}

export default App;
