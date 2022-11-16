import React, { FC } from "react";
import "./MyFillButton.sass";

interface MyFillButtonProps {
  children: React.ReactNode;
}

const MyFillButton: FC<MyFillButtonProps> = ({ children }) => {
  return (
    <button className="myFillButton">
      {children}
    </button>
  );
};

export default MyFillButton;
