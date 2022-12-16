import React from "react";
import { Link } from "react-router-dom";
import "./error-auth.sass";
import errorImg from "./error-img.png";

const ErrorAuth = () => {
  return (
    <section className="error-auth">
      <img src={errorImg} alt="Cлучилась ошибка" className="error-auth__img" />
      <div className="error-auth__text">
        <h1 className="error-auth__header">Ошибочка!!</h1>
        <span className="error-auth__desc">
          Кажется вы не имеете доступа к этому ресурсу :(
        </span>
        <Link to={"/"} className="error-auth__link">
          На главную
        </Link>
      </div>
    </section>
  );
};

export default ErrorAuth;
