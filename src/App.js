import React from 'react';
import './App.css';
import PokemonApp from './components/pokemonApp';
import PaginationContextProvider from './components/contexts/paginationContext';

function App() {
  return (
    <div className="App">
      <PaginationContextProvider>
        <PokemonApp />
      </PaginationContextProvider>
    </div>
  );
}

export default App;
