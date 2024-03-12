import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import App from './App'; // Assumindo que 'App.js' está no mesmo diretório que 'AppContainer.js'

export default function AppContainer() {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
}
