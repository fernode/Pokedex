import styled from 'styled-components';

export const Pokemon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 2rem;
  cursor: pointer;
  img {
    height: 13rem;
  }

  h2 {
    margin-bottom: 2rem;
    color: #ffffff;
    font-size: 1.8rem;
    text-transform: capitalize;
  }
`;
