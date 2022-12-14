import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import AuthForm from "../authForm/authForm";
import RegistForm from "../registForm/registForm";
import "./authPage.sass";

const AuthPage = () => {
  const auth = useTypedSelector((state) => state.authReducer);
  const navigate = useNavigate();
  console.log("authPage");

  useEffect(() => {
    if (auth.user.isAuth) {
      console.log("authPageEffect");
      navigate(`auth/user/${auth.user.authUser.id}`);
    }
  }, [auth.user]);
  return (
    <div className="auth-page">
      <AuthForm />
    </div>
  );
};

export default AuthPage;
