import React from "react";
import logo from "./logo.svg";
import logout from "./logout.svg";
import user from "./user-img.jpg";
import "./header.sass";
import { useDispatch } from "react-redux";
import { authLogoutAction } from "../../store/actions/auth-actions";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../hooks/use-typed-selector";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id }: { id: number } = useTypedSelector(
    (state) => state.authReducer.user.authUser
  );
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <a href="#!" className="header__href">
            <img src={logo} alt="Логотип MyDormitry" className="header__logo" />
          </a>
          <ul className="header__buttons">
            <li
              className="header__button"
              onClick={() => {
                navigate(`/auth/user/${id}`);
              }}
            >
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
                onClick={() => {
                  dispatch(authLogoutAction());
                  navigate("/");
                }}
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
