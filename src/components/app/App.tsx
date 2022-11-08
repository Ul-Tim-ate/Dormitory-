import React from "react";
import Settlers from "../settlers/settlersPage/settlersPage";
// import DormitryPage from "../domitry/DormitryPage/dormitryPage";
// import AuthPage from '../authPage/authPage';
// import ProfilePage from '../profilePage/profilePage';
import "./app.sass";

function App() {
  return (
    <div className="App">
      {/* <DormitryPage /> */}

      <Settlers/>
      {/* <ProfilePage/> */}
      {/* <AuthPage/> */}
    </div>
  );
}

export default App;
