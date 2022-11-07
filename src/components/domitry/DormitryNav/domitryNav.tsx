import React from "react";
import "./domitryNav.sass";

const DomitryNav = () => {
  return (
    <nav className="dorm-nav">
      <ul className="dorm-nav__list">
        <li className="dorm-nav__item active">
          <a href="#!">Общежитие</a>
        </li>
        <li className="dorm-nav__item">
          <a href="#!">На заселение</a>
        </li>
        <li className="dorm-nav__item">
          <a href="#!">Проживающие</a>
        </li>
      </ul>
    </nav>
  );
};

export default DomitryNav;
