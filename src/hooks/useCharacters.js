import { useState, useEffect } from 'react';

const useCharacters = url => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  }, [url]) //cuando el valor de url sea obtenido entonces corre este hook, mientras en standby
  return characters;
};

export default useCharacters;