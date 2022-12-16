import React, { FC } from "react";
import "./settlers-add-button.sass";

interface SettlersAddButtonProps {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettlersAddButton: FC<SettlersAddButtonProps> = ({ setModalActive }) => {
  return (
    <button
      className="settlers-button"
      onClick={() => {
        setModalActive(true);
      }}
    >
      Добавить студента
    </button>
  );
};

export default SettlersAddButton;
