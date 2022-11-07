import React from "react";
import "./authForm.sass";

const AuthForm = () => {
  return (
    <section className="authForm">
      <h2 className="authForm__header">MyDormitary</h2>
      <p className="authForm__desc">
        Добро пожаловать в сервис распределения комнат в общежитии
      </p>
      <form action="authForm__form" method="post" className="authForm__form">
        <label htmlFor="email" className="authForm__label">
          Корпаративная почта
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="authForm__input authForm__mail"
        />
        <label htmlFor="password" className="authForm__label">
          Пароль
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="authForm__input authForm__password"
        />
        <button type="submit" className="authForm__submit authForm__button">
          Войти
        </button>
      </form>
      <button className="authForm__registration authForm__button">Регистрация</button>
    </section>
  );
};

export default AuthForm;
