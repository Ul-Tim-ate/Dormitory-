import React, { FC, useState } from "react";
import "./plus-dormitry.sass";
import plus from "./plus.svg";

interface PlusDormitryProps {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlusDormitry: FC<PlusDormitryProps> = ({ setModalActive }) => {
  return (
    <button
      className="plus-dormitry"
      onClick={() => {
        setModalActive(true);
      }}
    >
      <img className="plus-dormitry__img" src={plus} alt="Добавить общежитие" />
    </button>
  );
};

export default PlusDormitry;
