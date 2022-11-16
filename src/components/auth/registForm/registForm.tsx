import React from "react";
import MyFillButton from "../../UI/fill-button/MyFillButton";
import MyInput from "../../UI/input/MyInput";

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
        <div className="registForm__input">
          <MyInput name="email" id="email" />
        </div>
        <label htmlFor="password" className="registForm__label">
          Пароль
        </label>
        <div className="registForm__input">
          <MyInput name="password" id="password" type="password" />
        </div>
        <label htmlFor="passwordRetype" className="registForm__label">
          Повторите пароль
        </label>
        <div className="registForm__input">
          <MyInput name="passwordRetype" id="passwordRetype" type="password" />
        </div>
        <label htmlFor="userData" className="registForm__label">
          Ф.И.О
        </label>
        <div className="registForm__input">
          <MyInput name="userData" id="userData" />
        </div>
        <label htmlFor="phone" className="registForm__label">
          Телефон
        </label>
        <div className="registForm__input">
          <MyInput name="phone" id="phone" type="tel" />
        </div>
        <MyFillButton>Отправить</MyFillButton>
      </form>
    </section>
  );
};

export default RegistForm;
