import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
  margin: -30px auto 0 auto;
`;

export const Card = styled.div`
  width: 352px;
  padding: 26px 32px;
  background: var(--white);
  border: none;
  border-radius: 5px;
  position: relative;

  &.total {
    background: var(--green);

    > span {
      color: var(--white);
    }
  }

  > span {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: var(--text-title);
    display: block;

    &.totalValue {
      font-size: 36px;
      font-weight: 500;
      line-height: 54px;
      margin-top: 14px;
    }
  }
`;

export const IconExport = styled.span`
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 2.66666C8.63621 2.66666 2.66668 8.6362 2.66668 16C2.66668 23.3638 8.63622 29.3333 16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.6362 23.3638 2.66666 16 2.66666Z' stroke='%2333CC95' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M21.3333 16L16 10.6667L10.6667 16' stroke='%2333CC95' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16 21.3333L16 10.6667' stroke='%2333CC95' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  width: 32px;
  height: 32px;
  position: absolute;
  top: 24px;
  right: 18px;
`;

export const IconImport = styled.span`
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63621 23.3638 2.66668 16 2.66667C8.63622 2.66667 2.66669 8.63621 2.66668 16C2.66668 23.3638 8.63622 29.3333 16 29.3333Z' stroke='%23E62E4D' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M10.6667 16L16 21.3333L21.3334 16' stroke='%23E62E4D' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M16 10.6667L16 21.3333' stroke='%23E62E4D' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  width: 32px;
  height: 32px;
  position: absolute;
  top: 24px;
  right: 20px;
`;

export const IconTotal = styled.span`
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 1.33333V30.6667' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M22.6667 6.66667H12.6667C11.429 6.66667 10.242 7.15834 9.36684 8.03351C8.49167 8.90868 8 10.0957 8 11.3333C8 12.571 8.49167 13.758 9.36684 14.6332C10.242 15.5083 11.429 16 12.6667 16H19.3333C20.571 16 21.758 16.4917 22.6332 17.3668C23.5083 18.242 24 19.429 24 20.6667C24 21.9043 23.5083 23.0913 22.6332 23.9665C21.758 24.8417 20.571 25.3333 19.3333 25.3333H8' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  width: 32px;
  height: 32px;
  position: absolute;
  top: 24px;
  right: 20px;
`;
