import React, { useEffect, useState } from "react";
import useInput from "../../../hooks/use-input/use-input";
import MyClearButton from "../../UI/clear-button/MyClearButton";
import MyFillButton from "../../UI/fill-button/MyFillButton";
import MyInput from "../../UI/input/MyInput";
import "./authForm.sass";

const AuthForm = () => {
  const email = useInput("", {
    isEmpty: true,
    minLength: 4,
    email: true,
    maxLength: 20,
  });
  const password = useInput("", {
    isEmpty: true,
    minLength: 8,
    email: false,
    maxLength: 12,
  });
  const isDisabledForm = Boolean(email.error) || Boolean(password.error)
  
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
          <MyInput
            name="email"
            id="email"
            value={email.value}
            change={email.onChange}
            blur={email.onBlur}
            isDirty={email.isDirty}
            error={email.error}
          />
        </div>
        <div className="authForm__password">
          <label htmlFor="password" className="authForm__label">
            Пароль
          </label>
          <MyInput
            name="password"
            id="password"
            type="password"
            value={password.value}
            change={password.onChange}
            blur={password.onBlur}
            isDirty={password.isDirty}
            error={password.error}
          />
        </div>
        <div className="authForm__submit">
          <MyFillButton isDisabled={isDisabledForm}>Войти</MyFillButton>
        </div>
      </form>
      <div className="authForm__registration">
        <MyClearButton>Регистрация</MyClearButton>
      </div>
    </section>
  );
};

export default AuthForm;
