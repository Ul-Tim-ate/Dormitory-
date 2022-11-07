import React from "react";

import "./domitryInfo.sass";

const DomitryInfo = () => {
  return (
    <section className="domitry-info">
      <h2 className="domitry-info__header">Информация об общежитии</h2>
      <ul className="domitry-info__list">
        <li className="domitry-info__item">
          <span className="domitry-info__key">Университет</span>
          <span className="domitry-info__value">Университет ИТМО</span>
        </li>
        <li className="domitry-info__item">
          <span className="domitry-info__key">Адрес</span>
          <span className="domitry-info__value">
            ул. Альпийский переулок, д. 15к2
          </span>
        </li>
        <li className="domitry-info__item">
          <span className="domitry-info__key">Этажи</span>
          <span className="domitry-info__value">15 этажей</span>
        </li>
        <li className="domitry-info__item">
          <span className="domitry-info__key">Всего мест</span>
          <span className="domitry-info__value">540</span>
        </li>
        <li className="domitry-info__item">
          <span className="domitry-info__key">Свободно</span>
          <span className="domitry-info__value">61</span>
        </li>
      </ul>
    </section>
  );
};

export default DomitryInfo;
