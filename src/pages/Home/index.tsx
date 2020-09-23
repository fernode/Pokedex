import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import PokemonItem from '../../components/PokemonItem';
import { H1, ContainerItem } from './styles';

const Home: React.FC = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [results, setResults] = useState([]);
  useEffect(() => {
    try {
      api
        .get('/pokemon')
        .then(response => response.data)
        .then(pokemon => {
          setPokemonData(pokemon);
          setResults(pokemon.results);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="container">
      <Header />
      <H1>Pokedex</H1>
      <ContainerItem>
        {results.map((pokemon, index) => (
          <PokemonItem key={index} pokemonData={pokemon} index={index + 1} />
        ))}
      </ContainerItem>
    </div>
  );
};

export default Home;
