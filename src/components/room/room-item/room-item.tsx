import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { IStudent } from "../../../models/student";
import { settleSettlerAction } from "../../../store/actions/settlers-actions";
import { resellteStudentProfileAction } from "../../../store/actions/student-profile.-actions";
import MyFillButton from "../../UI/fill-button/MyFillButton";
import "./room-item.sass";

interface RoomItemProps {
  roomNumber: number;
  all: number;
  free: number;
  resellte?: boolean;
}
const RoomItem: FC<RoomItemProps> = ({
  roomNumber,
  all,
  free,
  resellte = false,
}) => {
  const dispatch = useDispatch();
  const { id = "0", settlerId = "0" } = useParams();
  const navigate = useNavigate();
  const { student, getStudent }: { student: IStudent; getStudent: boolean } =
    useTypedSelector((state) => state.studentProfileReducer);
  return (
    <li className="room-item">
      <h3 className="room-item__header">Комната {roomNumber}</h3>
      <span className="room-item__info">
        Свободных мест: {free} из {all}
      </span>
      <div
        onClick={() => {
          if (resellte) {
            const newStudent = { ...student, room: roomNumber };
            dispatch(
              resellteStudentProfileAction(newStudent, Number.parseInt(id))
            );
            return;
          }
          dispatch(
            settleSettlerAction(
              Number.parseInt(id),
              Number.parseInt(settlerId),
              roomNumber
            )
          );
          navigate(`/domitry/${id}/students`);
        }}
      >
        <MyFillButton isDisabled={!free}>Заселить</MyFillButton>
      </div>
    </li>
  );
};

export default RoomItem;
