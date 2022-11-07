import React from "react";
import logo from "./logo.svg";
import logout from "./logout.svg";
import user from "./user-img.jpg";
import "./header.sass";

const Header = () => {
  return (
    <header className="header">
        <div className="header-wrapper">
          <a href="#!" className="header__href">
            <img src={logo} alt="Логотип MyDormitry" className="header__logo" />
          </a>
          <ul className="header__buttons">
            <li className="header__button">
              <img
                src={user}
                alt="Фотография пользователя"
                className="header__user"
              />
            </li>
            <li className="header__button">
              <img
                src={logout}
                alt="Выйти из аккаунта"
                className="header__logout"
              />
            </li>
          </ul>
        </div>
    </header>
  );
};

export default Header;
