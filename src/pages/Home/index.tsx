import React from 'react';

import { useGetPokemons } from '../../hooks/use_queries';
import Pokemons from '../../components/Pokemons';

import { Container } from '../../components/container.component';

export default function Home() {
  const data = useGetPokemons();
  return (
    <Container bgColor="#2b292c">
      <Pokemons data={data} />
    </Container>
  );
}
