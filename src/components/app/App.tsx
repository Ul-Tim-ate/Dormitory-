import React from "react";
// import AuthPage from "../auth/authPage/authPage";
// import DormitryPage from "../domitry/dormitryPage/dormitryPage";
import ErrorBoundary from "../error-boundary/error-boundary";
import NewDormitry from "../forms/new-student/newStudent";
// import LivingsPage from "../livings/livingsPage/livingsPage";
// import Settlers from "../settlers/settlersPage/settlersPage";

// import ProfilePage from "../profilePage/profilePage";
import "./app.sass";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <NewDormitry />
        {/* <DormitryPage /> */}
        {/* <LivingsPage/> */}
        {/* <Settlers/> */}
        {/* <ProfilePage /> */}
        {/* <AuthPage /> */}
      </div>
    </ErrorBoundary>
  );
}

export default App;
