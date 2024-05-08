import React, { useState } from "react";
import {
  Container,
  Content,
  Logo,
  LogoIcon,
  LogoTitle,
  Button,
} from "./styles";
import Modal from "react-modal";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <Logo>
          <LogoIcon></LogoIcon>
          <LogoTitle>dt money</LogoTitle>
        </Logo>
        <Button onClick={onOpenNewTransactionModal}>Nova transação</Button>
      </Content>
    </Container>
  );
}

export default Header;
