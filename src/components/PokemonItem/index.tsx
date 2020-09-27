import React, { useState } from 'react';
import { usePalette } from 'react-palette';
import ModalPokemonInfo from '../ModalPokemonInfo';
import { Pokemon } from './styles';

interface Data {
  pokemonData: {
    name: String;
    url: String;
  };
}

const PokemonItem: React.FC<Data> = ({ pokemonData }) => {
  const [showModal, setShowModal] = useState(false);
  const getPokemonId = pokemonData.url.slice(34).replace('/', '');

  const { data } = usePalette(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId}.png`
  );

  function openModal(open: boolean) {
    const { body } = document;

    if (open === true) {
      body.style.overflowY = 'hidden';
      window.scrollTo(0, 0);
    } else {
      body.style.overflowY = 'auto';
    }

    return setShowModal(open);
  }

  return (
    <>
      <Pokemon
        onClick={() => openModal(true)}
        style={{
          background: `linear-gradient(146deg, ${data.muted} 0%, ${data.vibrant} 100%)`,
        }}
      >
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId}.png`}
          alt=""
        />
        <h2>{pokemonData.name}</h2>
      </Pokemon>
      {showModal && (
        <ModalPokemonInfo
          modalId={getPokemonId}
          showModal={() => openModal(false)}
          showModalState={showModal}
        />
      )}
    </>
  );
};

export default PokemonItem;
