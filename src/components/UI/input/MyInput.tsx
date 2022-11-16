import React, { FC } from "react";
import './MyInput.sass'

interface MyInputProps {
  name: string;
  id: string;
  type?: string;
}

const MyInput: FC<MyInputProps> = ({ name, id, type = "text" }) => {
  return <input type={type} name={name} id={id} className="myInput" />;
};

export default MyInput;
