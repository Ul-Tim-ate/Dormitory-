import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { ISettler } from "../../../models/settler";
import DomitryNav from "../../domitry/dormitry-nav/domitry-nav";
import NewStudent from "../../forms/new-student/newStudent";
import Header from "../../header/header";
import MyModal from "../../UI/my-modal/my-modal";
import SettlersContent from "../../settlers/settlers-content/settlers-content";
import "./settlers-page.sass";
import { useDispatch } from "react-redux";
import ErrorAuth from "../../error/error-auth/error-auth";
import { authGetUserAction } from "../../../store/actions/auth-actions";
import LoadingSpinner from "../../UI/loading-spinner/my-spinner";
import { fetchSettlersAction } from "../../../store/actions/settlers-actions";

const SettlersPage = () => {
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  let { id = "0" } = useParams();
  let dormitoryId = -1;
  if (id) {
    dormitoryId = Number.parseInt(id);
  }
  const Auth = useTypedSelector((state) => state.authReducer);
  const settlersReducer = useTypedSelector((state) => state.settlersReducer);
  useEffect(() => {
    if (typeof Auth.user.isAuth === "undefined") {
      dispatch(authGetUserAction());
    }
    if (!settlersReducer.getSettlers && Auth.user.isAuth) {
      dispatch(fetchSettlersAction(Number.parseInt(id)));
    }
  }, [Auth.user.isAuth]);

  if (typeof Auth.user.isAuth === "undefined") {
    return (
      <div className="app__loading">
        <LoadingSpinner />
      </div>
    );
  }

  if (Auth.failedAuth || (!Auth.user.isAuth && !settlersReducer.getSettlers)) {
    return <ErrorAuth />;
  }

  if (!id) {
    throw new Error("no id in url living page");
  }

  return (
    <div className="settlers-page">
      <Header />
      <div className="settlers-page__content container">
        <div className="settlers-page__nav">
          <DomitryNav dormitoryId={dormitoryId} />
        </div>
        <div className="settlers-page__table">
          <SettlersContent setModalActive={setModalActive} />
        </div>
      </div>
      <MyModal active={modalActive} setActive={setModalActive}>
        <NewStudent setModalActive={setModalActive} dormitoryId={dormitoryId} />
      </MyModal>
    </div>
  );
};

export default SettlersPage;
