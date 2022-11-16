import React, { FC } from "react";
import "./MyRadioCheckbox.sass";

interface MyRadioCheckboxProps {}

const MyRadioCheckbox: FC<MyRadioCheckboxProps> = () => {
  return (
    <div className="my-radio-checkbox__checkboxes">
      <div className="my-radio-checkbox__checkbox">
        <input
          type="radio"
          id="flg-yes"
          name="flg"
          className="my-radio-checkbox"
          value="flg-yes"
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
        />
        <label htmlFor="flg-no">Нет</label>
      </div>
    </div>
  );
};

export default MyRadioCheckbox;
