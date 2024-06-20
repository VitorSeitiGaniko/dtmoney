import React, {useContext} from 'react';
import { Container, Card, IconExport, IconImport, IconTotal } from './styles';
import { TransactionsContext } from '../../TransactionsContext';

function Summary() {
  const {transactions} = useContext(TransactionsContext);

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  });

  return (
    <Container>
      <Card>
        <IconExport></IconExport>
        <span>Entradas</span>
        <span className="totalValue">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.deposits)
          }
        </span>
      </Card>

      <Card>
        <IconImport></IconImport>
        <span>Entradas</span>
        <span className="totalValue">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.withdraws)
          }
        </span>
      </Card>

      <Card className="total">
        <IconTotal></IconTotal>
        <span>Entradas</span>
        <span className="totalValue">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(summary.total)
          }
        </span>
      </Card>
    </Container>
  );
}

export default Summary;
