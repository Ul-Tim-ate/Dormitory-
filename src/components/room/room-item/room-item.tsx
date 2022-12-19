import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { settleSettlerAction } from "../../../store/actions/settlers-actions";
import MyFillButton from "../../UI/fill-button/MyFillButton";
import "./room-item.sass";

interface RoomItemProps {
  roomNumber: number;
  all: number;
  free: number;
}

const RoomItem: FC<RoomItemProps> = ({ roomNumber, all, free }) => {
  const dispatch = useDispatch();
  const { id = "0", settlerId = "0" } = useParams();
  return (
    <li className="room-item">
      <h3 className="room-item__header">Комната {roomNumber}</h3>
      <span className="room-item__info">
        Свободных мест: {free} из {all}
      </span>
      <div
        onClick={() => {
          dispatch(
            settleSettlerAction(
              Number.parseInt(id),
              Number.parseInt(settlerId),
              roomNumber
            )
          );
        }}
      >
        <MyFillButton isDisabled={!free}>Заселить</MyFillButton>
      </div>
    </li>
  );
};

export default RoomItem;
