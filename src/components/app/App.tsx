import React from "react";
import AuthPage from "../auth/auth-page/auth-page";
import DormitryPage from "../pages/dormitry-page/dormitry-page";
import ErrorBoundary from "../error/error-boundary/error-boundary";
import ProfilePage from "../pages/profile-page/profile-page";
import "./app.sass";
import { Route, Routes } from "react-router-dom";
import RegistPage from "../auth/regist-page/regist-page";
import ErrorIndicator from "../error/error-indicator/error-indicator";
import SettlersPage from "../pages/settlers-page/settlers-page";
import LivingsPage from "../pages/livings-page/livings-page";
import SettlersProfilePage from "../pages/settlers-profile-page/settlers-profile-page";
import StudentProfilePage from "../pages/student-profile-page/student-profile-page";
import RoomsPage from "../pages/rooms-page/rooms-page";

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/auth/registration" element={<RegistPage />} />
          <Route path="/auth/user/:id" element={<ProfilePage />} />
          <Route path="/domitry/:id" element={<DormitryPage />} />
          <Route path="/domitry/:id/settlers" element={<SettlersPage />} />
          <Route path="/domitry/:id/students" element={<LivingsPage />} />
          <Route
            path="/domitry/:id/settlers/:settlerId"
            element={<SettlersProfilePage />}
          />
          <Route
            path="/domitry/:id/students/:studentId"
            element={<StudentProfilePage />}
          />
          <Route path="/domitry/:id/rooms" element={<RoomsPage />} />
          <Route path="*" element={<ErrorIndicator />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
