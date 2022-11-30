import React, { FC } from "react";
import "./MyInput.sass";

interface MyInputProps {
  name: string;
  id: string;
  value?: string;
  type?: string;
  change?(e: React.ChangeEvent<HTMLInputElement>): void;
  blur?(e: React.FocusEvent<HTMLInputElement>): void;
  isDirty?: boolean;
  error?: string;
}

const MyInput: FC<MyInputProps> = ({
  name,
  id,
  change,
  blur,
  isDirty,
  error,
  type = "text",
}) => {
  return (
    <div className="my-input__wrapper">
      <span className="my-input__error">{isDirty && error ? error : ""}</span>
      <input
        type={type}
        name={name}
        id={id}
        className="my-input"
        onChange={change}
        onBlur={blur}
      />
    </div>
  );
};

export default MyInput;
