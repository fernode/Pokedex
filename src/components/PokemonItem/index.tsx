import React from 'react';
import { usePalette } from 'react-palette';
import { Pokemon } from './styles';

const PokemonItem: React.FC = () => {
  const { data, loading, error } = usePalette(
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
  );

  return (
    <Pokemon
      style={{
        background: `linear-gradient(146deg, ${data.muted} 0%, ${data.vibrant} 100%)`,
      }}
    >
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
        alt=""
      />
      <h2>Bulbasaur</h2>
    </Pokemon>
  );
};

export default PokemonItem;
