import React from 'react';
import { usePalette } from 'react-palette';
import { Pokemon } from './styles';

interface Data {
  pokemonData: {
    name: String;
    url: String;
  };
}

const PokemonItem: React.FC<Data> = ({ pokemonData }) => {
  const getPokemonId = pokemonData.url.slice(34).replace('/', '');

  const { data, loading, error } = usePalette(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId}.png`
  );

  return (
    <Pokemon
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
  );
};

export default PokemonItem;
