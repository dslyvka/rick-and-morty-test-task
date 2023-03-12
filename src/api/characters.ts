export const getCharacters = async () => {
  return await fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .catch((error) => console.error(error));
};

export const getCharacter = async (id: string) => {
  return await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
