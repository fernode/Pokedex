import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';
import PokemonItem from '../../components/PokemonItem';
import { H1, ContainerItem } from './styles';

const Home: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <div className="container">
      <Header />
      <H1>Pokedex</H1>
      <ContainerItem>
        <PokemonItem />
        <PokemonItem />
        <PokemonItem />
        <PokemonItem />
      </ContainerItem>
    </div>
  );
};

export default Home;
