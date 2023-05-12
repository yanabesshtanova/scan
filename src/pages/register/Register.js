import React, { useState } from "react";
import styles from "./Register.module.scss";
import { Form } from "../../components/form/Form";
import { registration } from "../../action/user";

const Register = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handLeSubmit = async () => {
    console.log("handle");
    try {
      await registration(login, password);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "login") {
      setLogin(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className={styles.register}>
      <div className={styles.register_content}>
        <div className={styles.left}>
          <h1 className={styles.left_text}>
            Для оформления подписки на тариф, необходимо авторизоваться.
          </h1>
          <img className="styles.left_img" src="/imag/Characters.svg" alt="left" />
        </div>
        <div className={styles.center}>
          <img className="styles.center_img" src="/imag/center.svg" alt="center" />
        </div>
        <div className={styles.right}>
          <Form
            login={login}
            password={password}
            onSubmit={handLeSubmit}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
