import React from "react";
import AuthPage from "../auth/authPage/authPage";
import DormitryPage from "../domitry/dormitryPage/dormitryPage";
import ErrorBoundary from "../error-boundary/error-boundary";
import LivingsPage from "../livings/livingsPage/livingsPage";
import Settlers from "../settlers/settlersPage/settlersPage";
import ProfilePage from "../profilePage/profilePage";
import "./app.sass";
import NewDormity from "../forms/new-dormitry/newDormity";
import SettlersProfile from "../settlers/settlersProfile/settlersProfile";
import NewStudent from "../forms/new-student/newStudent";
import SettlersProfilePage from "../settlers-profile-page/settlers-profile-page";
import RoomItem from "../room-item/room-item";
import RoomList from "../room-list/room-list";
import RoomInfo from "../room-info/room-info";
import { Route, Routes } from "react-router-dom";
import RegistPage from "../auth/regist-page/regist-page";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/auth/registration" element={<RegistPage />} />
        </Routes>
        {/* <RoomInfo/> */}
        {/* <RoomList/> */}
        {/* <SettlersProfile/> */}
        {/* <SettlersProfilePage/> */}
        {/* <NewDormity/> */}
        {/* <NewStudent/> */}
        {/* <DormitryPage /> */}
        {/* <LivingsPage/> */}
        {/* <Settlers/> */}
        {/* <ProfilePage /> */}
        {/* <AllDomitriesPage/> */}
      </div>
    </ErrorBoundary>
  );
}

export default App;
