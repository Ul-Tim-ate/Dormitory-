import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./dormitry-item.sass";

export interface DormitryItemProps {
  id: number;
  address: string;
  floorsCount: number;
  roomsCountOnFloor: number;
  roomCountPlaces: number;
  universityName: string;
  busyPlaces: number;
}

const DormitryItem: FC<DormitryItemProps> = ({
  id,
  address,
  floorsCount,
  roomsCountOnFloor,
  roomCountPlaces,
  universityName,
  busyPlaces,
}) => {
  return (
    <li className="dormitry-item">
      <Link to={`/domitry/${id}`}>
        <h3 className="dormitry-item__header">{universityName}</h3>
        <span className="dormitry-item__info">{address}</span>
        <span className="dormitry-item__info">{floorsCount} этажей</span>
        <span className="dormitry-item__info">
          {busyPlaces}/{roomCountPlaces * roomsCountOnFloor * floorsCount}{" "}
          занято
        </span>
        <div className="dormitry-item__range">
          <div className="dormitry-item__current"></div>
        </div>
      </Link>
    </li>
  );
};

export default DormitryItem;
