import React from "react";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { IRoom } from "../../../models/room";
import LoadingSpinner from "../../UI/loading-spinner/my-spinner";
import MyBreadCrumbs from "../../UI/my-bread-crumbs/my-breadcrumbs";
import RoomProfileSettlers from "../room-profile-settlers/room-profile-settlers";
import "./room-profile.sass";

const RoomProfile = () => {
  const breadcrambs = ["Комнаты", "Профиль комнаты"];
  const { room, getInfo }: { room: IRoom; getInfo: boolean } =
    useTypedSelector((state) => state.roomProfileReducer) || {};
  if (!getInfo) {
    return (
      <div className="room-profile__loading">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <div className="room-profile">
      <MyBreadCrumbs path={breadcrambs} />
      <h2 className="room-profile__header">Информация о комнате</h2>
      <ul className="room-profile__info">
        <li className="room-profile__info-item">
          <span className="room-profile__info-key">Номер комнаты</span>
          <span className="room-profile__info-value">{room.roomNumber}</span>
        </li>
        <li className="room-profile__info-item">
          <span className="room-profile__info-key">Количество мест</span>
          <span className="room-profile__info-value">{room.places}</span>
        </li>
        <li className="room-profile__info-item">
          <span className="room-profile__info-key">Свободно</span>
          <span className="room-profile__info-value">{room.freePlaces}</span>
        </li>
      </ul>
      <div className="room-profile__settlers">
        <RoomProfileSettlers />
      </div>
    </div>
  );
};

export default RoomProfile;
