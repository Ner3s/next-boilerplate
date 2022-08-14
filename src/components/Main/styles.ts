import styled from 'styled-components';

export const Wrapper = styled.main`
  background-color: #283036;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`;
