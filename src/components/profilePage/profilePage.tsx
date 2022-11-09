import React from "react";
import Header from "../header/header";
import UserInfo from "../user-info/userInfo";
import "./profilePage.sass";

const ProfilePage = () => {
  return (
    <section className="profile">
      <div className="container">
        <Header />
        <div className="profile__top">
          <nav className="profile__nav">
            <ul className="profile__nav-list">
              <li className="profile__nav-item">Главная</li>
              <li className="profile__nav-item">Мой профиль</li>
            </ul>
          </nav>
          <span className="profile__rewrite">Редактировать</span>
        </div>
        <UserInfo />
      </div>
    </section>
  );
};

export default ProfilePage;
