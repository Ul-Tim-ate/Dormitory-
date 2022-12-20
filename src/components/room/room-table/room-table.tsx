import React from "react";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { IRoom } from "../../../models/room";
import Table from "../../table/table";
import LoadingSpinner from "../../UI/loading-spinner/my-spinner";
import "./room-table.sass";

const RoomTable = () => {
  const { getRooms, rooms }: { getRooms: boolean; rooms: IRoom[] } =
    useTypedSelector((state) => state.roomsReducer) || {};
  const roomsReducer = useTypedSelector((state) => state.roomsReducer);
  const { id } = useParams();
  const headers = ["Номер комнаты", "Этаж", "Свободно", "Всего мест"];

  if (!roomsReducer.getRooms) {
    return (
      <div className="room-table__loading">
        <LoadingSpinner />
      </div>
    );
  }

  return <Table rows={rooms} headers={headers} path={`/domitry/${id}/rooms`} />;
};

export default RoomTable;
