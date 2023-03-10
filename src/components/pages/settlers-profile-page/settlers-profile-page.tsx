import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { authGetUserAction } from "../../../store/actions/auth-actions";
import {
  dumpSettlerProfileAction,
  getSettlerProfileAction,
} from "../../../store/actions/settler-profile-action";
import { fetchStudentsAction } from "../../../store/actions/students-actions";
import DomitryNav from "../../domitry/dormitry-nav/domitry-nav";
import ErrorAuth from "../../error/error-auth/error-auth";
import Header from "../../header/header";
import SettlersProfile from "../../settlers/settlers-profile/settlers-profile";
import LoadingSpinner from "../../UI/loading-spinner/my-spinner";
import "./settlers-profile-page.sass";

const SettlersProfilePage = () => {
  const { id = "0", settlerId = "0" } = useParams();
  const dispatch = useDispatch();
  const Auth = useTypedSelector((state) => state.authReducer);
  const settlerReducer = useTypedSelector(
    (state) => state.settlerProfileReducer
  );
  useEffect(() => {
    if (typeof Auth.user.isAuth === "undefined") {
      dispatch(authGetUserAction());
    }
    if (!settlerReducer.getSettler && Auth.user.isAuth) {
      dispatch(
        getSettlerProfileAction(Number.parseInt(id), Number.parseInt(settlerId))
      );
      return () => {
        dispatch(dumpSettlerProfileAction());
      };
    }
  }, [Auth.user.isAuth]);

  if (typeof Auth.user.isAuth === "undefined") {
    return (
      <div className="app__loading">
        <LoadingSpinner />
      </div>
    );
  }
  if (Auth.failedAuth || (!Auth.user.isAuth && !settlerReducer.getSettler)) {
    return <ErrorAuth />;
  }
  return (
    <section className="settlers-profile-page">
      <div className="container">
        <Header />
        <div className="settlers-profile-page__content">
          <div className="settlers-profile-page__nav">
            <DomitryNav dormitoryId={Number.parseInt(id)} />
          </div>
          <div className="settlers-profile-page__profile">
            <SettlersProfile />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettlersProfilePage;
