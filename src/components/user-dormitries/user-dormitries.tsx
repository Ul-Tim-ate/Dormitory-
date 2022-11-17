import React from "react";
import { DormitryItemProps } from "./dormitry-item/dormitry-item";
import DormitryList from "./dormitry-list/dormitry-list";
import "./user-dormitries.sass";

const UserDormitries = () => {
  const arr: DormitryItemProps[] = [
    {
      name: "Университет ИТМО",
      adress: "ул. Альпийский переулок, д. 15к2",
      buzy: 479,
      all: 575,
      floors: 15,
    },
    {
      name: "Университет ИТМО",
      adress: "ул. Альпийский переулок, д. 15к2",
      buzy: 479,
      all: 575,
      floors: 15,
    },
    {
      name: "Университет ИТМО",
      adress: "ул. Альпийский переулок, д. 15к2",
      buzy: 479,
      all: 575,
      floors: 15,
    },
    {
      name: "Университет ИТМО",
      adress: "ул. Альпийский переулок, д. 15к2",
      buzy: 479,
      all: 575,
      floors: 15,
    },
  ];

  return (
    <section className="user-dormitries">
      <div className="user-dormitries__top">
        <h2 className="user-dormitries__header">Мои общежития</h2>
        <span className="user-dormitries__top-href">
          Управление общежитиями
        </span>
      </div>
      <div className="user-dormitries__list">
        <DormitryList domitryItems={arr} />
      </div>
    </section>
  );
};

export default UserDormitries;
