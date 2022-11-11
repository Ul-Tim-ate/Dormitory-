import React from "react";
import "./new-dormity.sass";

const NewDormity = () => {
  return (
    <section className="new-dormitry">
      <h2 className="new-dormitry__header">Заполните данные об общежитии</h2>
      <form action="sad" className="new-dormitry__form">
        <label htmlFor="name" className="new-dormitry__label">
          Университет
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="new-dormitry__input new-dormitry__mail"
        />
        <label htmlFor="email" className="new-dormitry__label">
          Адрес
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="new-dormitry__input"
        />
        <label htmlFor="phone" className="new-dormitry__label">
          Количество этажей
        </label>
        <input
          type="number"
          name="phone"
          id="phone"
          className="new-dormitry__input"
        />
        <label htmlFor="univer" className="new-dormitry__label">
          Количество комнат на этаже
        </label>
        <input
          type="number"
          name="univer"
          id="univer"
          className="new-dormitry__input"
        />
        <div className="new-dormitry__buttons">
          <button className="new-dormitry__button">Сохранить</button>
          <button className="new-dormitry__button">Отмена</button>
        </div>
      </form>
    </section>
  );
};

export default NewDormity;
