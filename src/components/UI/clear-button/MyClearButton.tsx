import React, { FC } from "react";
import "./MyClearButton.sass";

interface MyClearButtonProps {
  children: React.ReactNode;
}

const MyClearButton: FC<MyClearButtonProps> = ({ children }) => {
  return <button className="myClearButton">{children}</button>;
};

export default MyClearButton;
