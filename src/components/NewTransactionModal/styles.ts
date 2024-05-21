import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 24px;
    margin-bottom: 32px;
  }

  input {
    width: 100%;
    height: 64px;
    padding: 24px;
    border-radius: 4px;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    font-size: 16px;
    font-weight: 400;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 16px;
    }
  }

  button[type='submit'] {
    width: 100%;
    height: 64px;
    padding: 0 24px;
    background: var(--green);
    color: var(--white);
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 600;
    margin-top: 24px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 16px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#12A454',
  red: '#E62E4D',
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 64px;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color 0.2s;

  background: ${(props) =>
    props.isActive
      ? transparentize(0.9, colors[props.activeColor])
      : 'transparent'};

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  span {
    display: inline-block;
    margin-left: 16px;
    color: var(--text-title);
    font-size: 16px;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;

export const IconIncome = styled.span`
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z' stroke='%2312A454' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16 12L12 8L8 12' stroke='%2312A454' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12 16L12 8' stroke='%2312A454' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  width: 24px;
  height: 24px;
  display: block;
`;

export const IconOutcome = styled.span`
  background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22.0001C17.5228 22.0001 22 17.5229 22 12.0001C22 6.47722 17.5228 2.00006 12 2.00006C6.47715 2.00006 2 6.47721 2 12.0001C2 17.5229 6.47715 22.0001 12 22.0001Z' stroke='%23E62E4D' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 12L12 16L16 12' stroke='%23E62E4D' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12 8.00006L12 16.0001' stroke='%23E62E4D' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  width: 24px;
  height: 24px;
  display: block;
`;
