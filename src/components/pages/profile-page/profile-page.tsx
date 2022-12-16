import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { authGetUserAction } from "../../../store/actions/auth-actions";
import { ErrorsMesage } from "../../../types/errors";
import ErrorAuth from "../../error/error-auth/error-auth";
import NewDormitry from "../../forms/new-dormitry/newDormity";
import Header from "../../header/header";
import LoadingSpinner from "../../UI/loading-spinner/my-spinner";
import MyBreadCrumbs from "../../UI/my-bread-crumbs/my-breadcrumbs";
import MyModal from "../../UI/my-modal/my-modal";
import MyProfileEdit from "../../UI/profile-edit/my-profile-edit";
import UserDormitries from "../../user/user-dormitries/user-dormitries";
import UserInfo from "../../user/user-info/userInfo";
import "./profile-page.sass";

const ProfilePage = () => {
  const [modalActive, setModalActive] = useState(false);
  const path = ["Мой профиль"];
  const a = useTypedSelector((state) => state.authReducer.user.isAuth);
  const dispatch = useDispatch();
  
  if (typeof a === "undefined") {
    dispatch(authGetUserAction());
    return (
      <div className="app__loading">
        <LoadingSpinner />
      </div>
    );
  }

  if (a === false) {
    return <ErrorAuth />;
  }

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
