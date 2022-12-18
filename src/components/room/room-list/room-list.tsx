import React, { useState } from "react";
import RoomItem from "../room-item/room-item";
import "./room-list.sass";
import leftArrow from "./arrow-left.svg";
import rightArrow from "./arrow-right.svg";

const RoomList = () => {
  const [page, setPage] = useState(1);
  return (
    <>
      <ul className="room-list">
        <RoomItem buzy={1} free={2} roomNumber={394} />
        <RoomItem buzy={1} free={2} roomNumber={394} />
        <RoomItem buzy={1} free={2} roomNumber={394} />
        <RoomItem buzy={1} free={2} roomNumber={394} />
        <RoomItem buzy={1} free={2} roomNumber={394} />
        <RoomItem buzy={1} free={2} roomNumber={394} />
      </ul>
      <div className="room-list__arrows">
        {page > 1 ? (
          <img
            src={leftArrow}
            alt="Предыдущие 6 комнат"
            className="room-list__arrow"
            onClick={() => {
              setPage((page) => {
                return --page;
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
              return ++page;
            });
          }}
        />
      </div>
    </>
  );
};

export default RoomList;
