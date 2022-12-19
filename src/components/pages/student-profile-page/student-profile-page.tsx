import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { authGetUserAction } from "../../../store/actions/auth-actions";
import {
  getSettlerProfileAction,
  dumpSettlerProfileAction,
} from "../../../store/actions/settler-profile-action";
import DomitryNav from "../../domitry/dormitry-nav/domitry-nav";
import Header from "../../header/header";
import StudentProfile from "../../students/students-profile/students-profile";
import LoadingSpinner from "../../UI/loading-spinner/my-spinner";
import "./student-profile-page.sass";

const StudentProfilePage = () => {
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
  return (
    <section className="student-profile-page">
      <div className="container">
        <Header />
        <div className="student-profile-page__content">
          <div className="student-profile-page__nav">
            <DomitryNav dormitoryId={Number.parseInt(id)} />
          </div>
          <div className="student-profile-page__profile">
            <StudentProfile />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentProfilePage;
