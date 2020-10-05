import styled from 'styled-components';

export const H1 = styled.h1`
  margin: 1.5rem 0.6rem;
`;

export const ContainerItem = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;

  @media (min-width: 1366px) {
    grid-template-columns: auto auto auto auto;
  }
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

export const SearchContainer = styled.div`
  .list {
    margin: 1rem 0;
    position: relative;
    input {
      width: 100%;
      padding: 1rem;
    }

    &__group {
      background: #ffffff;
      position: absolute;
      width: 100%;

      &-item {
        list-style: none;
        font-size: 1.4rem;
        padding: 0.3rem 0.7rem;
        &:hover {
          background: #29b6f6;
          color: #ffffff;
        }
      }
    }
  }
`;
