import { Navigate, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

import styles from "./Login.module.scss";

export const Login = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      // console.log(tokenResponse);
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
      navigate("/characters");
      return;
    },
  });

  if (localStorage.getItem("isLoggedIn") === "true")
    return <Navigate to="/characters" />;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login to the app using google auth</h1>
      <br />
      <button type="button" className={styles.gbtn} onClick={() => login()}>
        Sign in with Google
      </button>
      <br />
      <p className={styles.text}>
        1. Коли по макету ширина 1440, то айтем має бути 240х244, але у деяких
        персонажів не вміщується ім'я. Я вважаю, що в цьому
        випадку краще, щоб гріди автоматично вирахували ширину і висоту айтемів.
        Макет тільки на 360px і 1440px, проміжних варіантів немає, тож я
        погрався з грідами і зробив проміжні варіанти на око. Доречі, пропорції
        картинок, що вказані на макеті взагалі не пропорційні з тими, що
        приходять з беку. Я на 360 і 1440 зробив так як на макеті, а на інших
        ширинах екрану дозволив собі зробити іх пропорційними.
      </p>
      <p className={styles.text}>
        2. Я зробив логін за допомогою GoogleOAuth, в тз нічого про логін/логаут
        немає, тож я не реалізовув цей функцонал. Щоб вийти з додатку, треба
        зайти в local storage і змінити isLoggedIn на false та оновити сторінку.
      </p>

      <p className={styles.text}>
        3. Додав приватні раути, все інше реалізовано по тз.
      </p>
    </div>
  );
};
