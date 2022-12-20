import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./domitry-nav.sass";

interface DomitryNavProps {
  dormitoryId: number;
}

const DomitryNav: FC<DomitryNavProps> = ({ dormitoryId }) => {
  return (
    <nav className="dorm-nav">
      <ul className="dorm-nav__list">
        <Link to={`/domitry/${dormitoryId}`} className="dorm-nav__item active">
          Общежитие
        </Link>
        <Link
          to={`/domitry/${dormitoryId}/settlers`}
          className="dorm-nav__item"
        >
          На заселение
        </Link>
        <Link
          className="dorm-nav__item"
          to={`/domitry/${dormitoryId}/students`}
        >
          Проживающие
        </Link>
        <Link className="dorm-nav__item" to={`/domitry/${dormitoryId}/rooms`}>
          Комнаты
        </Link>
      </ul>
    </nav>
  );
};

export default DomitryNav;
