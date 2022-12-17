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
  const isAuthUser = useTypedSelector((state) => state.authReducer.user.isAuth);
  const dispatch = useDispatch();
  const dormitryReducer = useTypedSelector((state) => state.dormitryReducer);
  // console.log(isAuthUser);
  // // console.log(dormitories);
  let { id } = useParams();

  // if (typeof dormitryReducer.getDormitories === "undefined") {
  //   dispatch(authGetUserAction());
  //   dispatch(getUserDormitriesAction());
  //   return (
  //     <div className="app__loading">
  //       <LoadingSpinner />
  //     </div>
  //   );
  // }
  // if (isAuthUser === false) {
  //   return <ErrorAuth />;
  // }

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
        <DomitryNav id={dormitoryId} />
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
