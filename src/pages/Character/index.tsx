import { getCharacter } from "api/characters";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ICharacter } from "types/characters";

import arrow from "images/arrow.png";

import styles from "./Character.module.scss";

export const Character = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [character, setCharacter] = useState<null | ICharacter>(null);

  useEffect(() => {
    if (id) {
      getCharacter(id).then((character) => setCharacter(character));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate(-1);
  };

  return (
    <>
      {character && (
        <div className={styles.container}>
          <button onClick={onClick} className={styles.btn}>
            <img
              src={arrow}
              alt="arrow back"
              width="20"
              height="20"
              className={styles.img}
            />
            GO BACK
          </button>

          <div className={styles.imgContainer}>
            <img
              src={character.image}
              alt={character.name}
              className={styles.characterImage}
            />
            <h1 className={styles.name}>{character.name}</h1>
          </div>

          <div className={styles.informationContainer}>
            <h2 className={styles.title}>Information</h2>
            <ul className={styles.list}>
              <li className={styles.item}>
                <p className={styles.textTitle}>Gender</p>
                <p className={styles.text}>{character.gender}</p>
              </li>
              <li className={styles.item}>
                <p className={styles.textTitle}>Status</p>
                <p className={styles.text}>{character.status}</p>
              </li>
              <li className={styles.item}>
                <p className={styles.textTitle}>Specie</p>
                <p className={styles.text}>{character.species}</p>
              </li>
              <li className={styles.item}>
                <p className={styles.textTitle}>Origin</p>
                <p className={styles.text}>{character.origin.name}</p>
              </li>
              <li className={styles.item}>
                <p className={styles.textTitle}>Type</p>
                <p className={styles.text}>
                  {character.type ? character.type : "Unknown"}
                </p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
