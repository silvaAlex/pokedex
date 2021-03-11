import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/pokedex.routes';
import GlobalStyle from './src/styles/global';

export default function App() {
  return (
    <NavigationContainer>
      <GlobalStyle />
      <Routes />
    </NavigationContainer>
  );
}
