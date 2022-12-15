import React, { FC } from "react";
import "./validate-input.sass";

interface ValidateInputProps {
  name: string;
  id: string;
  value?: string;
  type?: string;
  change?(e: React.ChangeEvent<HTMLInputElement>): void;
  blur?(e: React.FocusEvent<HTMLInputElement>): void;
  isDirty?: boolean;
  error?: string;
}

const ValidateInput: FC<ValidateInputProps> = ({
  name,
  id,
  change,
  blur,
  isDirty,
  error,
  type = "text",
}) => {
  return (
    <div className="validate-input__wrapper">
      <span className="validate-input__error">
        {isDirty && error ? error : ""}
      </span>
      <input
        type={type}
        name={name}
        id={id}
        className="validate-input"
        onChange={change}
        onBlur={blur}
      />
    </div>
  );
};

export default ValidateInput;
