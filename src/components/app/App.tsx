import React from "react";
import ErrorBoundary from "../error-boundary/error-boundary";
// import LivingsPage from "../livings/livingsPage/livingsPage";
// import Settlers from "../settlers/settlersPage/settlersPage";
// import DormitryPage from "../domitry/DormitryPage/dormitryPage";
// import AuthPage from '../authPage/authPage';
import ProfilePage from "../profilePage/profilePage";
import "./app.sass";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        {/* <DormitryPage /> */}
        {/* <LivingsPage/> */}
        {/* <Settlers/> */}
        <ProfilePage />
        {/* <AuthPage/> */}
      </div>
    </ErrorBoundary>
  );
}

export default App;
