import React from "react";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { AuthUser } from "../../../types/auth-user";
import avatar from "./avatar.png";

import "./userInfo.sass";

const UserInfo = () => {
  const {
    user: {
      authUser: { email, fullname, phone },
    },
  }: { user: AuthUser } = useTypedSelector((state) => state.authReducer);
  return (
    <section className="profile__info user">
      <div className="user__main">
        <img
          src={avatar}
          alt="Фотография пользователя"
          className="user__photo"
        />
        <div className="user__text">
          <span className="user__name">{fullname}</span>
        </div>
      </div>
      <ul className="user__list">
        <li className="user__item">
          <span className="user__key">Телефон</span>
          <span className="user__value">{phone}</span>
        </li>
        <li className="user__item">
          <span className="user__key">Почта</span>
          <span className="user__value">{email}</span>
        </li>
      </ul>
    </section>
  );
};

export default UserInfo;
