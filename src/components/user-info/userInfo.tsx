import React from "react";
import avatar from "./avatar.png";

import "./userInfo.sass";

const UserInfo = () => {
  return (
    <section className="profile__info user">
      <div className="user__main">
        <img
          src={avatar}
          alt="Фотография пользователя"
          className="user__photo"
        />
        <div className="user__text">
          <span className="user__name">Королёв Артур Дмитриевич </span>
          <span className="user__role">комендант</span>
        </div>
      </div>
      <ul className="user__list">
        <li className="user__item">
          <span className="user__key">Телефон</span>
          <span className="user__value">+7 (903) 941-02-27</span>
        </li>
        <li className="user__item">
          <span className="user__key">Почта</span>
          <span className="user__value">example@niuitmo.ru</span>
        </li>
        <li className="user__item">
          <span className="user__key">Общежитие</span>
          <span className="user__value">Университет ИТМО, №3</span>
        </li>
      </ul>
    </section>
  );
};

export default UserInfo;
