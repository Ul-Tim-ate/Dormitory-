import React from "react";
import "./settlersProfile.sass";

import profileImg from "./settlers-img.svg";
import studentIcon from "./student.png";
import mailIcon from "./mail.png";
import phoneIcon from "./phone.png";
import flgIcon from "./flg.png";

const SettlersProfile = () => {
  return (
    <section className="settlers-profile">
      <div className="settlers-profile__top">
        <nav className="settlers-profile__nav">
          <ul className="settlers-profile__nav-list">
            <li className="settlers-profile__nav-item">На заселение</li>
            <li className="settlers-profile__nav-item">Карточка студента</li>
          </ul>
        </nav>
        <span className="settlers-profile__rewrite">Редактировать</span>
      </div>
      <div className="settlers-profile__info">
        <img
          src={profileImg}
          alt="Фотография заселенца"
          className="settlers-profile__img"
        />
        <div className="settlers-profile__text">
          <h2 className="settlers-profile__name">Янис Кузнецов</h2>
          <ul className="settlers-profile__list">
            <li className="settlers-profile__list-item">
              <img
                src={studentIcon}
                alt=""
                className="settlers-profile__list-img"
              />
              Университет ИТМО, 1 курс, факультет ФИТиП
            </li>
            <li className="settlers-profile__list-item">
              <img
                src={mailIcon}
                alt=""
                className="settlers-profile__list-img"
              />
              abobus@mail.ru
            </li>
            <li className="settlers-profile__list-item">
              <img
                src={phoneIcon}
                alt=""
                className="settlers-profile__list-img"
              />
              8-800-555-35-35
            </li>
            <li className="settlers-profile__list-item">
              <img
                src={flgIcon}
                alt=""
                className="settlers-profile__list-img"
              />
              Флюорография
            </li>
          </ul>
        </div>
      </div>
      <button className="settlers-profile__btn">Подобрать комнату</button>
    </section>
  );
};

export default SettlersProfile;
