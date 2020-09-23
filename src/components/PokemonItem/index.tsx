import React from 'react';
import { usePalette } from 'react-palette';
import { Pokemon } from './styles';

interface Data {
  pokemonData: {
    name: String;
    url: String;
  };
  index: Number;
}

const PokemonItem: React.FC<Data> = ({ pokemonData, index }) => {
  console.log(pokemonData.name);
  const { data, loading, error } = usePalette(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`
  );

  return (
    <Pokemon
      style={{
        background: `linear-gradient(146deg, ${data.muted} 0%, ${data.vibrant} 100%)`,
      }}
    >
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
        alt=""
      />
      <h2>{pokemonData.name}</h2>
    </Pokemon>
  );
};

export default PokemonItem;
