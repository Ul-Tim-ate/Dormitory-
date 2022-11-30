import React, { FC } from "react";
import "./MyFillButton.sass";

interface MyFillButtonProps {
  children: React.ReactNode;
  isDisabled?: boolean;
}

const MyFillButton: FC<MyFillButtonProps> = ({
  children,
  isDisabled = false,
}) => {
  return (
    <button className="myFillButton" disabled={isDisabled}>
      {children}
    </button>
  );
};

export default MyFillButton;
