import React, { useEffect, useState } from "react";
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

const RoomList = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { rooms, getRooms }: { rooms: IRoom[]; getRooms: boolean } =
    useTypedSelector((state) => state.roomsReducer);
  const { id = "0" } = useParams();
  useEffect(() => {
    dispatch(getDormitriesRoomsAction(page, Number.parseInt(id)));
  }, []);

  const displayRooms = getRooms ? (
    rooms.map((el) => {
      return (
        <RoomItem buzy={el.freePlaces} free={3} roomNumber={el.roomNumber} />
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
      <div className="room-list__arrows">
        {page > 1 ? (
          <img
            src={leftArrow}
            alt="Предыдущие 6 комнат"
            className="room-list__arrow"
            onClick={() => {
              setPage((page) => {
                dispatch(getDormitriesRoomsAction(--page, Number.parseInt(id)));
                return page;
              });
            }}
          />
        ) : (
          <div className=""></div>
        )}
        <img
          src={rightArrow}
          alt="Следующие 6 комнат"
          className="room-list__arrow"
          onClick={() => {
            setPage((page) => {
              dispatch(getDormitriesRoomsAction(++page, Number.parseInt(id)));
              return page;
            });
          }}
        />
      </div>
    </>
  );
};

export default RoomList;
