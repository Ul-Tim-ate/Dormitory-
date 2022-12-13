import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./dormitry-item.sass";

export interface DormitryItemProps {
  name: string;
  adress: string;
  floors: number;
  buzy: number;
  all: number;
  id: number;
}

const DormitryItem: FC<DormitryItemProps> = ({
  name,
  adress,
  floors,
  all,
  buzy,
  id,
}) => {
  return (
    <li className="dormitry-item">
      <Link to={`/domitry/${id}`}>
        <h3 className="dormitry-item__header">{name}</h3>
        <span className="dormitry-item__info">{adress}</span>
        <span className="dormitry-item__info">{floors} этажей</span>
        <span className="dormitry-item__info">
          {buzy}/{all} занято
        </span>
        <div className="dormitry-item__range">
          <div className="dormitry-item__current"></div>
        </div>
      </Link>
    </li>
  );
};

export default DormitryItem;
