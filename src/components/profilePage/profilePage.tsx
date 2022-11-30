import React from "react";
import Header from "../header/header";
import MyBreadCrumbs from "../UI/bread-crumbs/MyBreadCrumbs";
import MyProfileEdit from "../UI/profile-edit/MyProfileEdit";
import UserDormitries from "../user-dormitries/user-dormitries";
import UserInfo from "../user-info/userInfo";
import "./profilePage.sass";

const ProfilePage = () => {
  const path = ["Главная", "Мой профиль"];

  return (
    <section className="profile">
      <div className="container">
        <Header />
        <div className="profile__top">
          <MyBreadCrumbs path={path} />
          <MyProfileEdit />
        </div>
        <div className="profile__info">
          <UserInfo />
        </div>
        <div className="profile__domitries">
          <UserDormitries />
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;