import React, { FC } from "react";
import MyFillButton from "../../UI/fill-button/MyFillButton";
import "./room-item.sass";

interface RoomItemProps {
  roomNumber: number;
  all: number;
  free: number;
}

const RoomItem: FC<RoomItemProps> = ({ roomNumber, all, free }) => {
  return (
    <li className="room-item">
      <h3 className="room-item__header">Комната {roomNumber}</h3>
      <span className="room-item__info">
        Свободных мест: {free} из {all}
      </span>
      <MyFillButton isDisabled={!free}>Заселить</MyFillButton>
    </li>
  );
};

export default RoomItem;
