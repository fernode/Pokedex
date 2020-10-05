import React, { useState, useEffect } from 'react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

import { BiArrowBack } from 'react-icons/bi';
import { usePalette } from 'react-palette';
import api from '../../services/api';
import { Div, PokemonInfos, TypePokemonList } from './styles';

interface Props {
  modalId: string;
  showModal: any;
  showModalState: Boolean;
}

interface States {
  id: number;
  weight: number;
  name: string;
  height: number;
  length: number;
  abilities: [
    {
      ability: {
        name: String;
      };
    }
  ];
  species: {
    name: String;
  };
  stats: [
    {
      // eslint-disable-next-line camelcase
      base_stat: number;
      stat: {
        name: String;
      };
    }
  ];
  types: [
    {
      slot: number;
      type: {
        name: String;
      };
    }
  ];
}

const ModalPokemonInfo: React.FC<Props> = ({
  modalId,
  showModal,
  showModalState,
}) => {
  const [pokemonData, setPokemonData] = useState<States>({
    id: 0,
    weight: 0,
    height: 0,
    name: '',
    length: 0,
    abilities: [
      {
        ability: {
          name: '',
        },
      },
    ],
    species: {
      name: '',
    },
    stats: [
      {
        base_stat: 0,
        stat: {
          name: '',
        },
      },
    ],
    types: [
      {
        slot: 0,
        type: {
          name: '',
        },
      },
    ],
  });
  const { data } = usePalette(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${modalId}.png`
  );

  useEffect(() => {
    try {
      api
        .get(`/pokemon/${modalId}`)
        .then(response => response.data)
        .then(response => {
          setPokemonData(response);
        });
    } catch (error) {
      return error;
    }
  }, [modalId]);

  return (
    <Div
      id={modalId}
      style={{
        background: `linear-gradient(146deg, ${data.muted} 0%, ${data.vibrant} 100%)`,
        display: showModalState === true ? `block` : 'none',
        overflowY: 'auto',
      }}
    >
      <div className="container">
        <div className="return" onClick={() => showModal(false)}>
          <BiArrowBack />
        </div>

        <div className="text-box">
          <div className="text-box__01">
            <h3>{pokemonData.name}</h3>
            <TypePokemonList background={data.vibrant || 'transparent'}>
              {pokemonData.types.map(item => (
                <li key={item.slot}>{item.type.name}</li>
              ))}
            </TypePokemonList>
          </div>

          <div className="text-box__02">
            <span>#{pokemonData.id}</span>
          </div>
        </div>
      </div>

      <PokemonInfos>
        <img
          className="pokemon-img"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${modalId}.png`}
          alt=""
        />

        <div className="container info-container">
          <div className="about">
            <h4>About</h4>
            <ul>
              <li>
                <span> Species </span> <b>{pokemonData.species.name}</b>
              </li>
              <li>
                <span> Height</span> <b>{pokemonData.height}</b>
              </li>
              <li>
                <span> Weight</span>
                <b>{pokemonData.weight}</b>
              </li>
              <li>
                <span>Abilities</span>{' '}
                <b>
                  {pokemonData.abilities.map(item => `${item.ability.name}, `)}
                </b>
              </li>
            </ul>
          </div>

          <div className="stats">
            <h4>Stats</h4>
            <ul>
              {pokemonData.stats.map(item => (
                <li>
                  <span>
                    {item.stat.name} <strong>{item.base_stat}</strong>
                  </span>
                  <Progress
                    percent={item.base_stat}
                    status="success"
                    theme={{
                      success: {
                        symbol: ' ',
                        color: 'rgb(223, 105, 180)',
                      },
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PokemonInfos>
    </Div>
  );
};

export default ModalPokemonInfo;
