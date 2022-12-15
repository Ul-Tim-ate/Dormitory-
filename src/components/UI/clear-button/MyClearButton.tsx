import React, { FC } from "react";
import "./MyClearButton.sass";

interface MyClearButtonProps {
  children: React.ReactNode;
  setModalActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyClearButton: FC<MyClearButtonProps> = ({
  children,
  setModalActive,
}) => {
  return (
    <button
      className="myClearButton"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        if (setModalActive) {
          setModalActive(false);
        }
      }}
    >
      {children}
    </button>
  );
};

export default MyClearButton;
