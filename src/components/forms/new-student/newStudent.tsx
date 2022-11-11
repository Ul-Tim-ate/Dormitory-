import React from "react";

import "./newStudent.sass";
import buttonImg from "./form-photo.svg";

const NewStudent = () => {
  return (
    <section className="new-student">
      <h2 className="new-student__header">Заполните данные о студенте</h2>
      <form action="sad" className="new-student__form">
        <label htmlFor="name" className="new-student__label">
          Ф.И.О.
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="new-student__input new-student__mail"
        />
        <label htmlFor="email" className="new-student__label">
          Почта
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="new-student__input"
        />
        <label htmlFor="phone" className="new-student__label">
          Телефон
        </label>
        <input
          type="phone"
          name="phone"
          id="phone"
          className="new-student__input"
        />
        <label htmlFor="univer" className="new-student__label">
          Университет
        </label>
        <input
          type="text"
          name="univer"
          id="univer"
          className="new-student__input"
        />
        <span className="new-student__flg">ФЛГ</span>
        <div className="new-student__checkboxes">
          <div className="new-student__checkbox">
            <input
              type="radio"
              id="flg-yes"
              name="flg"
              className="custom-radio"
              value="flg-yes"
            />
            <label htmlFor="flg-yes">Да</label>
          </div>
          <div className="new-student__checkbox">
            <input
              type="radio"
              id="flg-no"
              name="flg"
              className="custom-radio"
              value="flg-no"
            />
            <label htmlFor="flg-no">Нет</label>
          </div>
        </div>
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
          <button className="new-student__button">Сохранить</button>
          <button className="new-student__button">Отмена</button>
        </div>
      </form>
    </section>
  );
};

export default NewStudent;
