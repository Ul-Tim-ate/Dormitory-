import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import AuthForm from "../../forms/authForm/authForm";
import RegistForm from "../../forms/registForm/registForm";
import "./auth-page.sass";

const AuthPage = () => {
  const auth = useTypedSelector((state) => state.authReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.user.isAuth) {
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
