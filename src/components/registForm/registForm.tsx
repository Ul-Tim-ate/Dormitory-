import React from "react";

import "./registForm.sass";

const RegistForm = () => {
  return (
    <section className="registForm">
      <h2 className="registForm__header">Регистрация</h2>
      <form
        action="registForm__form"
        method="post"
        className="registForm__form"
      >
        <label htmlFor="email" className="registForm__label">
          Корпаративная почта
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="registForm__input"
        />
        <label htmlFor="password" className="registForm__label">
          Пароль
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="registForm__input"
        />
        <label htmlFor="passwordRetype" className="registForm__label">
          Повторите пароль
        </label>
        <input
          type="password"
          name="passwordRetype"
          id="passwordRetype"
          className="registForm__input"
        />
        <label htmlFor="userData" className="registForm__label">
          Ф.И.О
        </label>
        <input
          type="text"
          name="userData"
          id="userData"
          className="registForm__input"
        />
        <label htmlFor="phone" className="registForm__label">
          Телефон
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="registForm__input"
        />
        <button type="submit" className="registForm__submit registForm__button">
          Регистрация
        </button>
      </form>
    </section>
  );
};

export default RegistForm;
