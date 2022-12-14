import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import RegistForm from "../registForm/registForm";

const RegistPage = () => {
  const auth = useTypedSelector((state) => state.authReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.user.isAuth) {
      navigate(`/auth/user/${auth.user.authUser.id}`);
    }
  }, [auth.user]);
  return (
    <div className="auth-page">
      <RegistForm />
    </div>
  );
};

export default RegistPage;
