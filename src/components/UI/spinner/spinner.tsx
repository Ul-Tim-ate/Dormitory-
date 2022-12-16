import React, { Component, FC } from "react";
import "./spinner.sass";

interface SpinnerProps {
  loading: boolean;
}

const FormSpinner: FC<SpinnerProps> = ({ loading }) => {
  const spinnerClasses = loading ? "spinner loading" : "spinner";
  return (
    <div className={spinnerClasses}>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default FormSpinner;
