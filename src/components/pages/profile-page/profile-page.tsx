import React, { useState } from "react";
import NewDormitry from "../../forms/new-dormitry/newDormity";
import Header from "../../header/header";
import MyBreadCrumbs from "../../UI/my-bread-crumbs/my-breadcrumbs";
import MyModal from "../../UI/my-modal/my-modal";
import MyProfileEdit from "../../UI/profile-edit/my-profile-edit";
import UserDormitries from "../../user/user-dormitries/user-dormitries";
import UserInfo from "../../user/user-info/userInfo";
import "./profile-page.sass";

const ProfilePage = () => {
  const [modalActive, setModalActive] = useState(false);

  const path = ["Мой профиль"];
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
          <UserDormitries setModalActive={setModalActive} />
        </div>
      </div>
      <MyModal active={modalActive} setActive={setModalActive}>
        <NewDormitry setModalActive={setModalActive} />
      </MyModal>
    </section>
  );
};

export default ProfilePage;
