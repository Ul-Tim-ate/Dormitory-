import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./domitryNav.sass";

interface DomitryNavProps {
  id: number;
}

const DomitryNav: FC<DomitryNavProps> = ({ id }) => {
  return (
    <nav className="dorm-nav">
      <ul className="dorm-nav__list">
        <Link to={`/domitry/${id}`} className="dorm-nav__item active">
          <a href="#!">Общежитие</a>
        </Link>
        <Link to={`/domitry/${id}/settlers`} className="dorm-nav__item">
          <a href="#!">На заселение</a>
        </Link>
        <li className="dorm-nav__item">
          <a href="#!">Проживающие</a>
        </li>
      </ul>
    </nav>
  );
};

export default DomitryNav;
