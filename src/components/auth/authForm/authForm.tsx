import React from "react";
import MyClearButton from "../../UI/clear-button/MyClearButton";
import MyFillButton from "../../UI/fill-button/MyFillButton";
import MyInput from "../../UI/input/MyInput";
import "./authForm.sass";

const AuthForm = () => {
  return (
    <section className="authForm">
      <h2 className="authForm__header">MyDormitary</h2>
      <p className="authForm__desc">
        Добро пожаловать в сервис распределения комнат в общежитии
      </p>
      <form action="authForm__form" method="post" className="authForm__form">
        <div className="authForm__mail">
          <label htmlFor="email" className="authForm__label">
            Корпаративная почта
          </label>
          <MyInput name="email" id="email" />
        </div>
        <div className="authForm__password">
          <label htmlFor="password" className="authForm__label">
            Пароль
          </label>
          <MyInput name="password" id="password" type="password" />
        </div>
        <div className="authForm__submit">
          <MyFillButton>Войти</MyFillButton>
        </div>
      </form>
      <div className="authForm__registration">
        <MyClearButton>Регистрация</MyClearButton>
      </div>
    </section>
  );
};

export default AuthForm;
