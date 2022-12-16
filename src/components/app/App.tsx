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
          <Route path="*" element={<ErrorIndicator />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
