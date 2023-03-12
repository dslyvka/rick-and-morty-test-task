import { List } from "components/List";
import { useState } from "react";
import { useEffect } from "react";
import { getCharacters } from "api/characters";
import { ICharacter } from "types/characters";

import styles from "./Characters.module.scss";

import logo from "images/logo.png";
import search from "images/search.png";

const sortCharacters = (a: ICharacter, b: ICharacter) =>
  a.name.localeCompare(b.name);

export const Characters = () => {
  const [characters, setCharacters] = useState<null | ICharacter[]>(null);
  const [filteredCharacters, setFilteredCharacters] = useState(characters);
  const [query, setQuery] = useState(localStorage.getItem("query") || "");

  useEffect(() => {
    getCharacters().then((characters) => {
      setCharacters(characters.results.sort(sortCharacters));
    });

    if (!localStorage.getItem("query")) {
      localStorage.setItem("query", "");
    }
  }, []);

  useEffect(() => {
    if (characters) {
      const filtered = characters.filter((character) =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCharacters(filtered);
      localStorage.setItem("query", query);
    }
  }, [characters, query]);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <img src={logo} alt="Rick and Morty" className={styles.logo} />

        <div className={styles.inputContainer}>
          <label htmlFor="" className={styles.label}>
            <img
              src={search}
              alt="search icon"
              width="24"
              height="24"
              className={styles.searchLogo}
            />
            <input
              type="text"
              value={query}
              onChange={onChange}
              placeholder="Filter by name..."
              className={styles.input}
            />
          </label>
        </div>

        <List characters={filteredCharacters} />
      </div>
    </>
  );
};
