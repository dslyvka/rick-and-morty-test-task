import { Link } from "react-router-dom";

import styles from "./List.module.scss";

interface IItem {
  name: string;
  image: string;
  species: string;
  id: number;
}

export const Item = ({ name, image, species, id }: IItem) => {
  return (
    <li className={styles.item}>
      <Link to={`${id}`}>
        <img src={image} alt={name} className={styles.img} />

        <div className={styles.textContainer}>
          <p className={styles.name}>{name}</p>
          <p className={styles.species}>{species}</p>
        </div>
      </Link>
    </li>
  );
};
