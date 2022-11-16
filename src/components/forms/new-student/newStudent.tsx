import React from "react";

import "./newStudent.sass";
import buttonImg from "./form-photo.svg";
import MyInput from "../../UI/input/MyInput";
import MyClearButton from "../../UI/clear-button/MyClearButton";
import MyFillButton from "../../UI/fill-button/MyFillButton";
import MyRadioCheckbox from "../../UI/radio-checkbox/MyRadioCheckbox";

const NewStudent = () => {
  return (
    <section className="new-student">
      <h2 className="new-student__header">Заполните данные о студенте</h2>
      <form action="sad" className="new-student__form">
        <label htmlFor="name" className="new-student__label">
          Ф.И.О.
        </label>
        <div className="new-student__input">
          <MyInput name="name" id="id" />
        </div>
        <label htmlFor="email" className="new-student__label">
          Почта
        </label>
        <div className="new-student__input">
          <MyInput name="email" id="email" />
        </div>
        <label htmlFor="phone" className="new-student__label">
          Телефон
        </label>
        <div className="new-student__input">
          <MyInput name="phone" id="phone" type="phone" />
        </div>
        <label htmlFor="univer" className="new-student__label">
          Университет
        </label>
        <div className="new-student__input">
          <MyInput name="univer" id="univer" />
        </div>
        <span className="new-student__flg">ФЛГ</span>
        <MyRadioCheckbox />
        <label htmlFor="photo" className="new-student__label">
          Фото
        </label>
        <input
          id="photo"
          type="file"
          accept="image/png,image/jpeg"
          className="new-student__input-file"
        />
        <label htmlFor="photo" className="new-student__label-photo">
          <img src={buttonImg} alt="Иконка загрузки фотографии" /> Загрузить
          фото
        </label>
        <div className="new-student__buttons">
          <MyFillButton>Сохранить</MyFillButton>
          <MyClearButton>Отмена</MyClearButton>
        </div>
      </form>
    </section>
  );
};

export default NewStudent;
