import React, { FC, useEffect, useState } from "react";
import RoomItem from "../room-item/room-item";
import "./room-list.sass";
import leftArrow from "./arrow-left.svg";
import rightArrow from "./arrow-right.svg";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import LoadingSpinner from "../../UI/loading-spinner/my-spinner";
import { getDormitriesRoomsAction } from "../../../store/actions/rooms-actions";
import { useParams } from "react-router-dom";
import { IRoom } from "../../../models/room";
import { IStudent } from "../../../models/student";
import RoomArrows from "../room-arrows/room-arrows";

interface RoomListProps {
  resellte?: boolean;
}

const RoomList: FC<RoomListProps> = ({ resellte = false }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { rooms, getRooms }: { rooms: IRoom[]; getRooms: boolean } =
    useTypedSelector((state) => state.roomsReducer);
  const { id = "0" } = useParams();
  useEffect(() => {
    dispatch(getDormitriesRoomsAction(page, Number.parseInt(id)));
  }, [page]);

  const displayRooms = getRooms ? (
    rooms.map((el) => {
      return (
        <RoomItem
          key={el.roomNumber}
          free={el.freePlaces}
          all={el.places}
          roomNumber={el.roomNumber}
          resellte={resellte}
        />
      );
    })
  ) : (
    <div className="room-list__loading">
      <LoadingSpinner />
    </div>
  );
  return (
    <>
      <ul className="room-list">{displayRooms}</ul>
      <RoomArrows page={page} setPage={setPage} />
    </>
  );
};

export default RoomList;
