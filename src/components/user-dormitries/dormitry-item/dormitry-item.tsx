import React, { FC } from "react";
import "./dormitry-item.sass";

export interface DormitryItemProps {
  name: string;
  adress: string;
  floors: number;
  buzy: number;
  all: number;
}

const DormitryItem: FC<DormitryItemProps> = ({
  name,
  adress,
  floors,
  all,
  buzy,
}) => {
  return (
    <li className="dormitry-item">
      <h3 className="dormitry-item__header">{name}</h3>
      <span className="dormitry-item__info">{adress}</span>
      <span className="dormitry-item__info">{floors} этажей</span>
      <span className="dormitry-item__info">
        {buzy}/{all} занято
      </span>
      <div className="dormitry-item__range">
        <div className="dormitry-item__current"></div>
      </div>
    </li>
  );
};

export default DormitryItem;
