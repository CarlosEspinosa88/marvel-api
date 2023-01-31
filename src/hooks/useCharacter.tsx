import React, { useState, useEffect } from "react"

type Thumbnail = {
  path: string;
  extension: string;
};

type Character = {
  id: number;
  name: string;
  thumbnail: Thumbnail;
};

export const useCharacter = (url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [characters, setCharacters] = useState<Character[] | []>([])

  useEffect(() => {
    setLoading(true)
    
    async function initCharacterData() {
      const response = await fetch(url)
      const data = await response.json()

      const statusOk = data?.status === 'Ok'
      const statusCode = data?.code === 200

      if (statusOk && statusCode) {
        setCharacters(data?.data?.results)
        setLoading(false)
      } else {
        setError(true)
        setLoading(false)
      }
    }

    initCharacterData()
  }, [])

  return {
    error,
    loading,
    characters,
  }
}

