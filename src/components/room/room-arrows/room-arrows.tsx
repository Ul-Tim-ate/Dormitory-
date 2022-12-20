import React, { FC } from "react";
import "./room-arrows.sass";
import leftArrow from "./arrow-left.svg";
import rightArrow from "./arrow-right.svg";

interface RoomArrowsProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const RoomArrows: FC<RoomArrowsProps> = ({ page, setPage }) => {
  return (
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
  );
};

export default RoomArrows;
