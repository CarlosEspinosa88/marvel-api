import React, { useState, ChangeEvent, useCallback, useMemo } from 'react';
import './App.css';
import Input from './components/Input/index'
import { Layout } from './components/Layout/index'
import { useCharacter } from './hooks/useCharacter'
import { ALL_URL } from '../src/utils/dataUrl'


function App() {
  const { characters, error, loading } = useCharacter(ALL_URL)
  const [searchCharacter, setSearchCharacter] = useState<string>('')

  const handleOnChangeInput = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSearchCharacter(event.target.value)
  }, [])

  const filterCharacter = useMemo(() => (
    characters.filter(({ name }) => {
      return name.toLowerCase().includes(searchCharacter.toLowerCase())
    })), [characters, searchCharacter]) 

  return (
    <div className="App">
      <Layout>
        {error && <p>Error fetching data 🥺</p>}
        {loading && <p>Loading data...</p>}
        <Input 
          type="text"
          name='search-characters'
          value={searchCharacter}
          onChange={handleOnChangeInput}
        />
        {filterCharacter.map(({ id, name, thumbnail }) => (
          <div key={id}>
            <p>{name}</p>
            <img
              width="20%"
              decoding="async"
              alt={name}
              loading="eager"
              src={`${thumbnail.path}.${thumbnail.extension}`}
            />
          </div>
        ))}
      </Layout>
    </div>
  );
}

export default App;
