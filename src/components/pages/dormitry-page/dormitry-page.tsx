import React from "react";
import DomitryInfo from "../../domitry/domitry-info/domitry-info";
import DomitryNav from "../../domitry/dormitry-nav/domitry-nav";
import Header from "../../header/header";
import "./dormitry-page.sass";
import DomitryVisual from "../../domitry/domitry-visual/domitry-visual";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { IDormitry } from "../../../models/dormitry";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authGetUserAction } from "../../../store/actions/auth-actions";
import ErrorAuth from "../../error/error-auth/error-auth";
import LoadingSpinner from "../../UI/loading-spinner/my-spinner";
import { getUserDormitriesAction } from "../../../store/actions/dormitry-actions";

const DormitryPage = () => {
  const Auth = useTypedSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const dormitryReducer = useTypedSelector((state) => state.dormitryReducer);
  let { id } = useParams();
  if (Auth.failedAuth) {
    return <ErrorAuth />;
  }
  if (!Auth.user.isAuth) {
    dispatch(authGetUserAction());
  }
  if (!dormitryReducer.getDormitories && Auth.user.isAuth) {
    dispatch(getUserDormitriesAction());
  }

  if (!(dormitryReducer.getDormitories && Auth.user.isAuth)) {
    return (
      <div className="app__loading">
        <LoadingSpinner />
      </div>
    );
  }

  let dormitoryId = -1;
  if (id) {
    dormitoryId = Number.parseInt(id);
  }
  const currentDormitory = dormitryReducer.dormitories.find(
    (el: IDormitry) => el.id == dormitoryId
  );
  if (!currentDormitory) {
    throw new Error("Такой общаги нет");
  }
  return (
    <div className="dormitry">
      <Header />
      <section className="dormitry__content container">
        <DomitryNav dormitoryId={dormitoryId} />
        <div>
          <DomitryInfo {...currentDormitory} />
          <DomitryVisual
            all={
              currentDormitory.roomsCountOnFloor *
              currentDormitory.roomCountPlaces *
              currentDormitory.floorsCount
            }
            buzy={currentDormitory.busyPlaces}
          />
        </div>
      </section>
    </div>
  );
};

export default DormitryPage;
