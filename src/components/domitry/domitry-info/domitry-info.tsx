import React, { FC } from "react";
import { IDormitry } from "../../../models/dormitry";
import "./domitry-info.sass";

const DomitryInfo: FC<IDormitry> = ({
  address,
  floorsCount,
  roomsCountOnFloor,
  roomCountPlaces,
  universityName,
  busyPlaces,
}) => {
  return (
    <section className="domitry-info">
      <h2 className="domitry-info__header">Информация об общежитии</h2>
      <ul className="domitry-info__list">
        <li className="domitry-info__item">
          <span className="domitry-info__key">Университет</span>
          <span className="domitry-info__value">{universityName}</span>
        </li>
        <li className="domitry-info__item">
          <span className="domitry-info__key">Адрес</span>
          <span className="domitry-info__value">{address}</span>
        </li>
        <li className="domitry-info__item">
          <span className="domitry-info__key">Этажи</span>
          <span className="domitry-info__value">{floorsCount} этажей</span>
        </li>
        <li className="domitry-info__item">
          <span className="domitry-info__key">Всего мест</span>
          <span className="domitry-info__value">
            {roomsCountOnFloor * roomCountPlaces * floorsCount}
          </span>
        </li>
        <li className="domitry-info__item">
          <span className="domitry-info__key">Свободно</span>
          <span className="domitry-info__value">
            {roomsCountOnFloor * roomCountPlaces * floorsCount - busyPlaces}
          </span>
        </li>
      </ul>
    </section>
  );
};

export default DomitryInfo;
