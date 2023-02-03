import { LazyLoadImage } from "react-lazy-load-image-component";

import React, { useState, ChangeEvent, useCallback, useMemo } from 'react';
import './App.css';
import LogoImage from './images/logo192.png'; 
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
            <LazyLoadImage
              alt={name}
              effect="blur"
              width={192} height={192}
              placeholderSrc={LogoImage}
              src={`${thumbnail.path}.${thumbnail.extension}`}
            />
          </div>
        ))}
      </Layout>
    </div>
  );
}

export default App;
