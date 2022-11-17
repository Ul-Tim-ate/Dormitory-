import React from "react";
import AuthPage from "../auth/authPage/authPage";
// import DormitryPage from "../domitry/dormitryPage/dormitryPage";
import ErrorBoundary from "../error-boundary/error-boundary";
// import LivingsPage from "../livings/livingsPage/livingsPage";
import Settlers from "../settlers/settlersPage/settlersPage";

import ProfilePage from "../profilePage/profilePage";
import "./app.sass";
import NewDormity from "../forms/new-dormitry/newDormity";
import SettlersProfile from "../settlers/settlersProfile/settlersProfile";
import NewStudent from "../forms/new-student/newStudent";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        {/* <SettlersProfile/> */}
        {/* <NewDormity/> */}
        {/* <NewStudent/> */}
        {/* <DormitryPage /> */}
        {/* <LivingsPage/> */}
        {/* <Settlers/> */}
        <ProfilePage />
        {/* <AuthPage /> */}
      </div>
    </ErrorBoundary>
  );
}

export default App;
