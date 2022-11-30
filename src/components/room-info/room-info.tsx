import React, { FC } from "react";
import './room-info.sass'

interface RoomInfoProps {}

const RoomInfo: FC<RoomInfoProps> = () => {
  return (
    <section className="room-info">
      <h2 className="room-info__header">Информация о помещении</h2>
      <ul className="room-info__list">
        <li className="room-info__item">
          <span className="room-info__key">Номер комнаты</span>
          <span className="room-info__value">408</span>
        </li>
        <li className="room-info__item">
          <span className="room-info__key">Номер комнаты</span>
          <span className="room-info__value">408</span>
        </li>
        <li className="room-info__item">
          <span className="room-info__key">Номер комнаты</span>
          <span className="room-info__value">408</span>
        </li>
      </ul>
    </section>
  );
};

export default RoomInfo;
