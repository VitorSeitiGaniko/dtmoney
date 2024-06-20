import { FormEvent, React, useState, useContext } from 'react';
import Modal from 'react-modal';
import {
  Container,
  IconIncome,
  IconOutcome,
  TransactionTypeContainer,
  RadioBox,
} from './styles';

import { api } from '../../services/api';
import { TransactionsContext } from '../../TransactionsContext';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const { createTransaction } = useContext(TransactionsContext);

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction ({
      title,
      amount,
      type,
      category,
    });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Nova transação</h2>
        <span className="iconClose" onClick={onRequestClose}></span>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
          type="number"
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            isActive={type === 'deposit'}
            activeColor="green"
            onClick={() => setType('deposit')}
          >
            <IconIncome />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === 'withdraw'}
            activeColor="red"
            onClick={() => setType('withdraw')}
          >
            <IconOutcome />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}

export default NewTransactionModal;
