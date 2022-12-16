import React, { FC } from "react";
import MyFillButton from "../../UI/fill-button/MyFillButton";
import "./room-item.sass";

interface RoomItemProps {
  roomNumber: number;
  free: number;
  buzy: number;
}

const RoomItem: FC<RoomItemProps> = ({ roomNumber, free, buzy }) => {
  return (
    <li className="room-item">
      <h3 className="room-item__header">Комната {roomNumber}</h3>
      <span className="room-item__info">
        Свободных мест: {buzy} из {free}
      </span>
      <MyFillButton>Заселить</MyFillButton>
    </li>
  );
};

export default RoomItem;
