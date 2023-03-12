import { ICharacter } from "types/characters";

import { Item } from "./Item";

import styles from "./List.module.scss";

interface IList {
  characters: ICharacter[] | null;
}

export const List = ({ characters }: IList) => {
  return (
    <ul className={styles.list}>
      {characters ? (
        characters.map(({ id, name, species, image }: ICharacter) => (
          <Item image={image} name={name} species={species} id={id} key={id} />
        ))
      ) : (
        <></>
      )}
    </ul>
  );
};
