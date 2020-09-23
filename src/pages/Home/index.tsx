import React, { useEffect, useState } from 'react';
import { BiCaretLeft, BiCaretRight } from 'react-icons/bi';

import Header from '../../components/Header';
import api from '../../services/api';
import PokemonItem from '../../components/PokemonItem';
import { H1, ContainerItem, Arrows } from './styles';

const Home: React.FC = () => {
  const [pokemonData, setPokemonData] = useState({
    next: '',
    previous: '',
  });
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
      console.log(pokemonData.next);
    } catch (error) {
      console.log(error);
    }
  }, []);

  function paginationNext() {
    if (pokemonData.next !== '' && pokemonData.next != null) {
      const next = pokemonData.next.slice(33);

      try {
        api
          .get(`/pokemon${next}`)
          .then(response => response.data)
          .then(pokemon => {
            setPokemonData(pokemon);
            setResults(pokemon.results);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }

  function paginationBefore() {
    if (pokemonData.previous !== '' && pokemonData.previous != null) {
      const previous = pokemonData.previous.slice(33);

      try {
        api
          .get(`/pokemon${previous}`)
          .then(response => response.data)
          .then(pokemon => {
            setPokemonData(pokemon);
            setResults(pokemon.results);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="container">
      <Header />
      <H1>Pokedex</H1>
      <ContainerItem>
        {results.map((pokemon, index) => (
          <PokemonItem key={index} pokemonData={pokemon} />
        ))}
      </ContainerItem>

      <Arrows>
        <BiCaretLeft onClick={paginationBefore} />
        <BiCaretRight onClick={paginationNext} />
      </Arrows>
    </div>
  );
};

export default Home;
