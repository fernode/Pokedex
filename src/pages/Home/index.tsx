import React, { useEffect, useState } from 'react';
import { BiCaretLeft, BiCaretRight } from 'react-icons/bi';
import { Typeahead } from '@gforge/react-typeahead-ts';

import sujestions from '../../data/sujestions.json';
import Header from '../../components/Header';

import api from '../../services/api';
import PokemonItem from '../../components/PokemonItem';
import { H1, ContainerItem, Arrows, SearchContainer } from './styles';

const Home: React.FC = () => {
  const [pokemonData, setPokemonData] = useState({
    next: '',
    previous: '',
  });
  const [results, setResults] = useState([
    {
      name: '',
      url: '',
    },
  ]);

  const pokemonNames = sujestions.results.map(({ name }) => name);

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

  function paginationNext(): void {
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

  function paginationBefore(): void {
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

  function getSelectedPokemon(name: any): void {
    const result = sujestions.results.filter(obj => obj.name === name);
    console.log(name);
    setResults(result);
  }

  return (
    <div className="container">
      <Header />
      <H1>Pokedex</H1>
      <SearchContainer>
        <Typeahead
          className="list"
          options={pokemonNames}
          maxVisible={5}
          placeholder="Faça a busca e selecione o pokemon"
          allowCustomValues
          onOptionSelected={value => getSelectedPokemon(value)}
          customClasses={{
            results: 'list__group',
            listItem: 'list__group-item',
            hover: 'active',
          }}
        />
      </SearchContainer>

      <ContainerItem>
        {results.map(pokemon => (
          <PokemonItem key={pokemon.name} pokemonData={pokemon} />
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
