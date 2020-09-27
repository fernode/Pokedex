import styled from 'styled-components';

interface ModalPokemonInfoProps {
  background: string;
  // modalStyle: boolean;
}

export const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  max-width: 100%;
  z-index: 9999;

  .return {
    margin-top: 3rem;

    svg {
      width: 3rem;
      height: 3rem;
      color: #ffffffff;
    }
  }

  .text-box {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__01 {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;

      h3 {
        font-size: 3rem;
        color: #ffffff;
        text-transform: uppercase;
      }
    }

    &__02 {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      text-align: right;

      span {
        font-size: 3rem;
        color: #ffffff;
      }
    }
  }
`;

export const TypePokemonList = styled.ul<ModalPokemonInfoProps>`
  display: flex;
  margin-top: 0.5rem;

  li {
    list-style: none;
    color: #ffffff;
    width: 7rem;
    font-size: 2rem;
    margin-right: 1rem;
    background: ${props => props.background};
    text-transform: capitalize;
    border-radius: 11px;
    text-align: center;
  }
`;

export const PokemonInfos = styled.div`
  background: #ffffff;
  border-radius: 30px 30px 0 0;
  width: 100%;
  height: 100vh;
  margin-top: 14rem;

  .pokemon-img {
    width: 30rem;
    height: 30rem;
    transform: translate(15%, -56%);
  }

  .info-container {
    margin-top: -24rem;

    h4 {
      font-size: 2rem;
    }

    ul {
      list-style: none;
    }

    li {
      font-size: 1.5rem;
      margin-top: 1rem;
      span {
        color: #a4aba7;
        width: 15rem;
      }
    }

    .about {
      li {
        display: flex;
        align-items: center;

        b {
          text-transform: capitalize;
          margin-left: -5rem;
          font-weight: 300;
        }
      }
    }

    .stats {
      margin-top: 3rem;

      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1rem;
        text-transform: capitalize;
      }
    }
  }
`;
