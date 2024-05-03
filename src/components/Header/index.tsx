import React from "react";
import {
  Container,
  Content,
  Logo,
  LogoIcon,
  LogoTitle,
  Button,
} from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <LogoIcon></LogoIcon>
          <LogoTitle>dt money</LogoTitle>
        </Logo>
        <Button>Nova transação</Button>
      </Content>
    </Container>
  );
}

export default Header;
