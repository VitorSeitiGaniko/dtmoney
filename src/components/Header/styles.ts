import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
  height: 212px;
  padding-top: 32px;
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoIcon = styled.span`
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M34.1422 5.85781C30.3647 2.08031 25.3422 0 20 0C14.6578 0 9.63531 2.08031 5.85781 5.85781C2.08031 9.63531 0 14.6578 0 20C0 25.3422 2.08039 30.3646 5.85781 34.1422C9.63523 37.9198 14.6578 40 20 40C25.3422 40 30.3647 37.9197 34.1422 34.1422C37.9197 30.3647 40 25.3422 40 20C40 14.6578 37.9196 9.63539 34.1422 5.85781Z' fill='%2333CC95'/%3E%3Cg clip-path='url(%23clip0_35212_209)'%3E%3Cpath d='M20.5714 8V33.1429' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M26.2857 12.5714H17.7143C16.6534 12.5714 15.636 12.9929 14.8859 13.743C14.1357 14.4931 13.7143 15.5106 13.7143 16.5714C13.7143 17.6323 14.1357 18.6497 14.8859 19.3999C15.636 20.15 16.6534 20.5714 17.7143 20.5714H23.4286C24.4894 20.5714 25.5069 20.9929 26.257 21.743C27.0072 22.4932 27.4286 23.5106 27.4286 24.5714C27.4286 25.6323 27.0072 26.6497 26.257 27.3999C25.5069 28.15 24.4894 28.5714 23.4286 28.5714H13.7143' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_35212_209'%3E%3Crect width='27.4286' height='27.4286' fill='white' transform='translate(6.85715 6.85714)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
  width: 40px;
  height: 40px;
  display: block;
`;

export const LogoTitle = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 600;
  margin-left: 16px;
  color: var(--white);
`;

export const Button = styled.button`
  padding: 12px 32px;
  border: none;
  border-radius: 5px;
  background: var(--blue-light);

  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: var(--white);

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;
