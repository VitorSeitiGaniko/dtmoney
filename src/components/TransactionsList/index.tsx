import React from "react";
import { Container } from "./styles";

function TransactionsList() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$ 1.100,00</td>
            <td>Casa</td>
            <td>17/02/2021</td>
          </tr>
          <tr>
            <td>Computador</td>
            <td className="withdraw">- R$ 5.000,00</td>
            <td>Eletrônicos</td>
            <td>12/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

export default TransactionsList;
