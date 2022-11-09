import React from "react";

import "./error-indicator.sass";
import errorImg from "./error-img.png";

const ErrorIndicator = () => {
  return (
    <section className="error-indicator">
      <img
        src={errorImg}
        alt="Cлучилась ошибка"
        className="error-indicator__img"
      />
      <div className="error-indicator__text">
        <h1 className="error-indicator__header">Ошибочка!!</h1>
        <span className="error-indicator__desc">Что-то пошло не так :(</span>
        <a href="#!" className="error-indicator__link">
          На главную
        </a>
      </div>
    </section>
  );
};

export default ErrorIndicator;
