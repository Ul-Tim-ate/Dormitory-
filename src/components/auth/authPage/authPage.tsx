import React from "react";
import AuthForm from "../authForm/authForm";
import RegistForm from '../registForm/registForm';
import "./authPage.sass";

const AuthPage = () => {
  return (
    <div className="auth-page">
      {/* <AuthForm /> */}
      <RegistForm/>
    </div>
  );
};

export default AuthPage;
