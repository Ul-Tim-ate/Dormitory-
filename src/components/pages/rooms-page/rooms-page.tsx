import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { authGetUserAction } from "../../../store/actions/auth-actions";
import { getDormitriesRoomsAction } from "../../../store/actions/rooms-actions";
import DomitryNav from "../../domitry/dormitry-nav/domitry-nav";
import ErrorAuth from "../../error/error-auth/error-auth";
import Header from "../../header/header";
import RoomArrows from "../../room/room-arrows/room-arrows";
import RoomTable from "../../room/room-table/room-table";
import LoadingSpinner from "../../UI/loading-spinner/my-spinner";
// import roomsContent from "../../rooms/roomsContent/roomsContent";
import "./rooms-page.sass";

const RoomsPage = () => {
  const { id = "0" } = useParams();
  const dispatch = useDispatch();
  const Auth = useTypedSelector((state) => state.authReducer);
  const roomsReducer = useTypedSelector((state) => state.roomsReducer);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (typeof Auth.user.isAuth === "undefined") {
      dispatch(authGetUserAction());
    }
    if (!roomsReducer.getRooms && Auth.user.isAuth) {
      dispatch(getDormitriesRoomsAction(1, Number.parseInt(id)));
    }
  }, [Auth.user.isAuth]);

  useEffect(() => {
    if (typeof Auth.user.isAuth !== "undefined") {
      dispatch(getDormitriesRoomsAction(page, Number.parseInt(id)));
    }
  }, [page]);

  if (typeof Auth.user.isAuth === "undefined") {
    return (
      <div className="app__loading">
        <LoadingSpinner />
      </div>
    );
  }

  if (Auth.failedAuth || (!Auth.user.isAuth && !roomsReducer.getRooms)) {
    return <ErrorAuth />;
  }
  return (
    <div className="rooms-page">
      <Header />
      <div className="rooms-page__content container">
        <div className="rooms-page__nav">
          <DomitryNav dormitoryId={Number.parseInt(id)} />
        </div>
        <div className="rooms-page__table">
          <RoomTable />
          <RoomArrows page={page} setPage={setPage} />
        </div>
      </div>
    </div>
  );
};

export default RoomsPage;
