import React from 'react';
import './App.css';
import { Layout } from './components/Layout/index'
import { useCharacter } from './hooks/useCharacter'
import { ALL_URL } from '../src/utils/dataUrl'

function App() {
  const { characters } = useCharacter(ALL_URL)

  return (
    <div className="App">
      <Layout>
        {characters.map((character) => (
          <div key={character.id}>
            <p>{character.name}</p>
          </div>
        ))}
      </Layout>
    </div>
  );
}

export default App;
