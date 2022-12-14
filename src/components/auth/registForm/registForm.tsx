import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useInput from "../../../hooks/use-input";
import { authRegistrationAction } from "../../../store/actions/auth-actions";
import Spinner from "../../spinner/spinner";
import MyFillButton from "../../UI/fill-button/MyFillButton";
import MyInput from "../../UI/input/MyInput";
import "./registForm.sass";

const RegistForm = () => {
  const [loading, setLoading] = useState(false);
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
    maxLength: 15,
  });
  const retypePassword = useInput("", {
    isEmpty: true,
    minLength: 8,
    email: false,
    maxLength: 15,
  });
  const phone = useInput("", {
    isEmpty: true,
    minLength: 4,
    email: false,
    maxLength: 15,
  });
  const fullname = useInput("", {
    isEmpty: true,
    minLength: 0,
    email: false,
    maxLength: 15,
  });

  const retypePass =
    password.value === retypePassword.value ? "" : "Пароли не совпадают";

  const dispatch = useDispatch();

  const registration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    dispatch(
      authRegistrationAction({
        email: email.value,
        fullname: fullname.value,
        phone: phone.value,
        password: password.value,
      })
    );
  };
  const registFormClasses = loading ? "registForm loading" : "registForm";
  const isDisabledForm =
    Boolean(email.error) || Boolean(password.error) || Boolean(retypePass);

  return (
    <section className={registFormClasses}>
      <Spinner loading={loading} />
      <h2 className="registForm__header">Регистрация</h2>
      <form
        action="registForm__form"
        method="post"
        className="registForm__form"
        onSubmit={registration}
      >
        <label htmlFor="email" className="registForm__label">
          Почта
        </label>
        <div className="registForm__input">
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
        <label htmlFor="password" className="registForm__label">
          Пароль
        </label>
        <div className="registForm__input">
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
        <label htmlFor="passwordRetype" className="registForm__label">
          Повторите пароль
        </label>
        <div className="registForm__input">
          <MyInput
            name="passwordRetype"
            id="passwordRetype"
            type="password"
            value={retypePassword.value}
            change={retypePassword.onChange}
            blur={retypePassword.onBlur}
            isDirty={retypePassword.isDirty}
            error={retypePass}
          />
        </div>
        <label htmlFor="userData" className="registForm__label">
          Ф.И.О
        </label>
        <div className="registForm__input">
          <MyInput
            name="userData"
            id="userData"
            value={fullname.value}
            change={fullname.onChange}
            blur={fullname.onBlur}
            isDirty={fullname.isDirty}
            error={fullname.error}
          />
        </div>
        <label htmlFor="phone" className="registForm__label">
          Телефон
        </label>
        <div className="registForm__input">
          <MyInput
            name="phone"
            id="phone"
            type="tel"
            value={phone.value}
            change={phone.onChange}
            blur={phone.onBlur}
            isDirty={phone.isDirty}
            error={phone.error}
          />
        </div>
        <MyFillButton isDisabled={isDisabledForm}>Отправить</MyFillButton>
      </form>
    </section>
  );
};

export default RegistForm;
