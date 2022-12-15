import React, { FC } from "react";
import "./MyInput.sass";

interface MyInputProps {
  name: string;
  id: string;
  value: string | number | null;
  change: React.Dispatch<React.SetStateAction<any>>;
  type?: string;
}

const MyInput: FC<MyInputProps> = ({
  name,
  id,
  value,
  change,
  type = "text",
}) => {
  const inputValue = value ? value : "";
  return (
    <div className="my-input__wrapper">
      <input
        type={type}
        name={name}
        id={id}
        className="my-input"
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          change(e.currentTarget.value);
        }}
      />
    </div>
  );
};

export default MyInput;
