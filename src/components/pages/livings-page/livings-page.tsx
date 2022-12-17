import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { authGetUserAction } from "../../../store/actions/auth-actions";
import { fetchStudentsAction } from "../../../store/actions/students-actions";
import DomitryNav from "../../domitry/dormitry-nav/domitry-nav";
import ErrorAuth from "../../error/error-auth/error-auth";
import Header from "../../header/header";
import LivingsContent from "../../livings/livingsContent/livingsContent";
import LoadingSpinner from "../../UI/loading-spinner/my-spinner";
import "./livings-page.sass";

const LivingsPage = () => {
  const { id = "0" } = useParams();
  const dispatch = useDispatch();
  const Auth = useTypedSelector((state) => state.authReducer);
  const studentsReducer = useTypedSelector((state) => state.studentsReducer);
  useEffect(() => {
    if (typeof Auth.user.isAuth === "undefined") {
      dispatch(authGetUserAction());
    }
    if (!studentsReducer.getStudents && Auth.user.isAuth) {
      dispatch(fetchStudentsAction(Number.parseInt(id)));
    }
  }, [Auth.user.isAuth]);

  if (typeof Auth.user.isAuth === "undefined") {
    return (
      <div className="app__loading">
        <LoadingSpinner />
      </div>
    );
  }

  if (Auth.failedAuth || (!Auth.user.isAuth && !studentsReducer.getStudents)) {
    return <ErrorAuth />;
  }

  if (!id) {
    throw new Error("no id in url living page");
  }

  return (
    <div className="livings-page">
      <Header />
      <div className="livings-page__content container">
        <div className="livings-page__nav">
          <DomitryNav dormitoryId={Number.parseInt(id)} />
        </div>
        <div className="livings-page__table">
          <LivingsContent />
        </div>
      </div>
    </div>
  );
};

export default LivingsPage;
