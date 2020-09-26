import React from 'react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

import { BiArrowBack } from 'react-icons/bi';
import { usePalette } from 'react-palette';
import { Div, PokemonInfos, TypePokemonList } from './styles';

interface Props {
  modalId: string;
  showModal: any;
  showModalState: Boolean;
}

const ModalPokemonInfo: React.FC<Props> = ({
  modalId,
  showModal,
  showModalState,
}) => {
  const { data } = usePalette(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`
  );

  return (
    <Div
      id={modalId}
      style={{
        background: `linear-gradient(146deg, ${data.muted} 0%, ${data.vibrant} 100%)`,
        display: showModalState === true ? `block` : 'none',
      }}
    >
      <div className="container">
        <div className="return" onClick={showModal}>
          <BiArrowBack />
        </div>

        <div className="text-box">
          <div className="text-box__01">
            <h3>Bulbasaur</h3>
            <TypePokemonList background={data.vibrant || 'transparent'}>
              <li>Gras</li>
              <li>Poison</li>
            </TypePokemonList>
          </div>

          <div className="text-box__02">
            <span>#001</span>
          </div>
        </div>
      </div>

      <PokemonInfos>
        <img
          className="pokemon-img"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          alt=""
        />

        <div className="container info-container">
          <div className="about">
            <h4>About</h4>
            <ul>
              <li>
                <span> Species </span> <b>Bulbasaur</b>
              </li>
              <li>
                <span> Height</span> <b>70cm</b>
              </li>
              <li>
                <span> Weight</span>
                <b>70cm</b>
              </li>
              <li>
                <span>Abilities</span> <b>overgrow</b>
              </li>
            </ul>
          </div>

          <div className="stats">
            <h4>Stats</h4>
            <ul>
              <li>
                <span>HP</span>
                <Progress
                  percent={10}
                  status="success"
                  theme={{
                    success: {
                      symbol: ' ',
                      color: 'rgb(223, 105, 180)',
                    },
                  }}
                />
              </li>
              <li>
                <span>Attack</span>
                <Progress
                  percent={88}
                  status="success"
                  theme={{
                    success: {
                      symbol: ' ',
                      color: 'rgb(223, 105, 180)',
                    },
                  }}
                />
              </li>
              <li>
                <span>Defence</span>
                <Progress
                  percent={88}
                  status="success"
                  theme={{
                    success: {
                      symbol: ' ',
                      color: 'rgb(223, 105, 180)',
                    },
                  }}
                />
              </li>
              <li>
                <span>Speed</span>
                <Progress
                  percent={88}
                  status="success"
                  theme={{
                    success: {
                      symbol: ' ',
                      color: 'rgb(223, 105, 180)',
                    },
                  }}
                />
              </li>
              <li>
                <span>Sp Atk</span>
                <Progress
                  percent={88}
                  status="success"
                  theme={{
                    success: {
                      symbol: ' ',
                      color: 'rgb(223, 105, 180)',
                    },
                  }}
                />
              </li>
              <li>
                <span>Sp Def</span>
                <Progress
                  percent={88}
                  status="success"
                  theme={{
                    success: {
                      symbol: ' ',
                      color: 'rgb(223, 105, 180)',
                    },
                  }}
                />
              </li>
            </ul>
          </div>
        </div>
      </PokemonInfos>
    </Div>
  );
};

export default ModalPokemonInfo;
