import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useInput from "../../../hooks/use-input";
import { authLoginAction } from "../../../store/actions/auth-actions";
import Spinner from "../../UI/spinner/spinner";
import MyClearButton from "../../UI/clear-button/MyClearButton";
import MyFillButton from "../../UI/fill-button/MyFillButton";
import ValidateInput from "../../validate-input/validate-input";
import "./authForm.sass";

const AuthForm = () => {
  const [loading, setLoading] = useState(false);
  const email = useInput("", {
    isEmpty: true,
    minLength: 4,
    email: true,
    maxLength: 30,
  });
  const password = useInput("", {
    isEmpty: true,
    minLength: 8,
    email: false,
    maxLength: 30,
  });
  const isDisabledForm = Boolean(email.error) || Boolean(password.error);

  const dispatch = useDispatch();

  const login = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    dispatch(authLoginAction(email.value, password.value));
  };

  const authFormClasses = loading ? "authForm loading" : "authForm";

  return (
    <section className={authFormClasses}>
      <Spinner loading={loading} />
      <h2 className="authForm__header">MyDormitary</h2>
      <p className="authForm__desc">
        Добро пожаловать в сервис распределения комнат в общежитии
      </p>
      <form
        action="authForm__form"
        method="post"
        className="authForm__form"
        onSubmit={login}
      >
        <div className="authForm__mail">
          <label htmlFor="email" className="authForm__label">
            Корпаративная почта
          </label>
          <ValidateInput
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
          <ValidateInput
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
        <Link to="/auth/registration">
          <MyClearButton>Регистрация</MyClearButton>
        </Link>
      </div>
    </section>
  );
};

export default AuthForm;
