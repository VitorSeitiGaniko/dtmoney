import React from "react";
import { Container, Card, IconExport, IconImport, IconTotal } from "./styles";

function Summary() {
  return (
    <Container>
      <Card>
        <IconExport></IconExport>
        <span>Entradas</span>
        <span className="totalValue">R$ 10.000,00</span>
      </Card>

      <Card>
        <IconImport></IconImport>
        <span>Entradas</span>
        <span className="totalValue">R$ 10.000,00</span>
      </Card>

      <Card className="total">
        <IconTotal></IconTotal>
        <span>Entradas</span>
        <span className="totalValue">R$ 10.000,00</span>
      </Card>
    </Container>
  );
}

export default Summary;
