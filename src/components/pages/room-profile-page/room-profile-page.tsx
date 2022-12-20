import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { IRoom } from "../../../models/room";
import { authGetUserAction } from "../../../store/actions/auth-actions";
import {
  dumpRoomProfileAction,
  getRoomProfileAction,
  setRoomProfileAction,
} from "../../../store/actions/room-profile-actions";
import DomitryNav from "../../domitry/dormitry-nav/domitry-nav";
import ErrorAuth from "../../error/error-auth/error-auth";
import Header from "../../header/header";
import RoomProfile from "../../room/room-profile/room-profile";
import LoadingSpinner from "../../UI/loading-spinner/my-spinner";
import "./room-profile-page.sass";

const RoomProfilePage = () => {
  const { id = "0", roomId = "0" } = useParams();
  const dispatch = useDispatch();
  const Auth = useTypedSelector((state) => state.authReducer);
  const roomProfileReducer = useTypedSelector(
    (state) => state.roomProfileReducer
  );
  useEffect(() => {
    if (typeof Auth.user.isAuth === "undefined") {
      dispatch(authGetUserAction());
    }
    if (!roomProfileReducer.getInfo && Auth.user.isAuth) {
      dispatch(
        getRoomProfileAction(Number.parseInt(id), Number.parseInt(roomId))
      );
    }
    return () => {
      dispatch(dumpRoomProfileAction());
    };
  }, [Auth.user.isAuth]);

  if (typeof Auth.user.isAuth === "undefined") {
    return (
      <div className="app__loading">
        <LoadingSpinner />
      </div>
    );
  }
  if (Auth.failedAuth || (!Auth.user.isAuth && !roomProfileReducer.getInfo)) {
    return <ErrorAuth />;
  }
  return (
    <section className="room-profile-page">
      <div className="container">
        <Header />
        <div className="room-profile-page__content">
          <div className="room-profile-page__nav">
            <DomitryNav dormitoryId={Number.parseInt(id)} />
          </div>
          <div className="room-profile-page__profile">
            <RoomProfile />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomProfilePage;
