import { useEffect, useState } from "react";
import { ICharacters } from "types/characters";
import { getCharacters } from "api/characters";

export const useGetCharacters = () => {
  const [characters, setCharacters] = useState<ICharacters | { results: [] }>({
    results: [],
  });

  useEffect(() => {
    getCharacters().then((characters) => setCharacters(characters));
  }, []);

  // console.log(characters)
  return characters.results.sort((a, b) => a.name.localeCompare(b.name));
};
