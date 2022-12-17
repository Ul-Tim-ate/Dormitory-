import React, { FC, useState } from "react";
import "./newStudent.sass";
import buttonImg from "./form-photo.svg";
import MyInput from "../../UI/my-input/my-input";
import MyClearButton from "../../UI/clear-button/MyClearButton";
import MyFillButton from "../../UI/fill-button/MyFillButton";
import MyRadioCheckbox from "../../UI/radio-checkbox/my-radio-checkbox";
import { useDispatch } from "react-redux";
import { addSettlersAction } from "../../../store/actions/settlers-actions";

interface NewStudentProps {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
  dormitoryId: number;
}

const NewStudent: FC<NewStudentProps> = ({ setModalActive, dormitoryId }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [flg, setFlg] = useState(false);
  const dispatch = useDispatch();
  const newStudentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addSettlersAction(
        {
          fullname: fullName,
          email: email,
          phone: phone,
          flg: flg,
        },
        dormitoryId
      )
    );
    setModalActive(false);
  };
  return (
    <section className="new-student">
      <h2 className="new-student__header">Заполните данные о студенте</h2>
      <form
        action="sad"
        className="new-student__form"
        onSubmit={newStudentSubmit}
      >
        <label htmlFor="name" className="new-student__label">
          Ф.И.О.
        </label>
        <div className="new-student__input">
          <MyInput name="name" id="id" value={fullName} change={setFullName} />
        </div>
        <label htmlFor="email" className="new-student__label">
          Почта
        </label>
        <div className="new-student__input">
          <MyInput name="email" id="email" value={email} change={setEmail} />
        </div>
        <label htmlFor="phone" className="new-student__label">
          Телефон
        </label>
        <div className="new-student__input">
          <MyInput
            name="phone"
            id="phone"
            type="phone"
            value={phone}
            change={setPhone}
          />
        </div>
        <span className="new-student__flg">ФЛГ</span>
        <MyRadioCheckbox change={setFlg} />
        <label htmlFor="photo" className="new-student__label">
          Фото
        </label>
        <input
          id="photo"
          type="file"
          accept="image/png,image/jpeg"
          className="new-student__input-file"
        />
        <label htmlFor="photo" className="new-student__label-photo">
          <img src={buttonImg} alt="Иконка загрузки фотографии" /> Загрузить
          фото
        </label>
        <div className="new-student__buttons">
          <MyFillButton>Сохранить</MyFillButton>
          <MyClearButton setModalActive={setModalActive}>Отмена</MyClearButton>
        </div>
      </form>
    </section>
  );
};

export default NewStudent;
