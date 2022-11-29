import React from "react";
import "./plus-dormitry.sass";
import plus from "./plus.svg";

const PlusDormitry = () => {
  return (
    <button className="plus-dormitry">
      <img className="plus-dormitry__img" src={plus} alt="Добавить общежитие" />
    </button>
  );
};

export default PlusDormitry;
