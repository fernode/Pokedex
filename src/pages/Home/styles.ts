import styled from 'styled-components';

export const H1 = styled.h1`
  margin: 1.5rem 0.6rem;
`;

export const ContainerItem = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
`;

export const Arrows = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  svg {
    width: 3rem;
    height: 3rem;
  }
`;
