import React, { FC } from "react";
import "./my-radio-checkbox.sass";

interface MyRadioCheckboxProps {
  change: React.Dispatch<React.SetStateAction<any>>;
}

const MyRadioCheckbox: FC<MyRadioCheckboxProps> = ({ change }) => {
  return (
    <div className="my-radio-checkbox__checkboxes">
      <div className="my-radio-checkbox__checkbox">
        <input
          type="radio"
          id="flg-yes"
          name="flg"
          className="my-radio-checkbox"
          value="flg-yes"
          onClick={() => {
            change(true);
          }}
        />
        <label htmlFor="flg-yes">Да</label>
      </div>
      <div className="my-radio-checkbox__checkbox">
        <input
          type="radio"
          id="flg-no"
          name="flg"
          className="my-radio-checkbox"
          value="flg-no"
          onClick={() => {
            change(false);
          }}
        />
        <label htmlFor="flg-no">Нет</label>
      </div>
    </div>
  );
};

export default MyRadioCheckbox;
