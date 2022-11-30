import React from "react";
import RoomItem from "../room-item/room-item";
import "./room-list.sass";

const RoomList = () => {
  return (
    <ul className="room-list">
      <RoomItem buzy={1} free={2} roomNumber={394} />
      <RoomItem buzy={1} free={2} roomNumber={394} />
      <RoomItem buzy={1} free={2} roomNumber={394} />
      <RoomItem buzy={1} free={2} roomNumber={394} />
      <RoomItem buzy={1} free={2} roomNumber={394} />
      <RoomItem buzy={1} free={2} roomNumber={394} />
    </ul>
  );
};

export default RoomList;
