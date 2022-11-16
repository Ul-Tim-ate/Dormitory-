import React from "react";
import MyClearButton from "../../UI/clear-button/MyClearButton";
import MyFillButton from "../../UI/fill-button/MyFillButton";
import MyInput from "../../UI/input/MyInput";
import "./new-dormity.sass";

const NewDormity = () => {
  return (
    <section className="new-dormitry">
      <h2 className="new-dormitry__header">Заполните данные об общежитии</h2>
      <form action="sad" className="new-dormitry__form">
        <label htmlFor="name" className="new-dormitry__label">
          Университет
        </label>
        <div className="new-dormitry__input">
          <MyInput name="name" id="name" />
        </div>
        <label htmlFor="adress" className="new-dormitry__label">
          Адрес
        </label>
        <div className="new-dormitry__input">
          <MyInput name="adress" id="adress" />
        </div>
        <label htmlFor="floors" className="new-dormitry__label">
          Количество этажей
        </label>
        <div className="new-dormitry__input">
          <MyInput name="floors" id="floors" type="number" />
        </div>
        <label htmlFor="rooms" className="new-dormitry__label">
          Количество комнат на этаже
        </label>
        <div className="new-dormitry__input">
          <MyInput name="rooms" id="rooms" type="number" />
        </div>
        <label htmlFor="settlers" className="new-dormitry__label">
          Количество проживающих в комнате
        </label>
        <div className="new-dormitry__input">
          <MyInput name="settlers" id="settlers" type="number" />
        </div>
        <div className="new-dormitry__buttons">
          <MyFillButton>Сохранить</MyFillButton>
          <MyClearButton>Отмена</MyClearButton>
        </div>
      </form>
    </section>
  );
};

export default NewDormity;
