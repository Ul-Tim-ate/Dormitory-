import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Dormitory } from "../../../models/response/dormitry-response";
import { addUserDormitoryAction } from "../../../store/actions/dormitry-actions";
import MyClearButton from "../../UI/clear-button/MyClearButton";
import MyFillButton from "../../UI/fill-button/MyFillButton";
import MyInput from "../../UI/my-input/my-input";
import "./new-dormity.sass";

interface NewDormitryProps {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const NewDormitry: FC<NewDormitryProps> = ({ setModalActive }) => {
  const [universityName, setUniversityName] = useState("");
  const [address, setAddress] = useState("");
  const [floors, setFloors] = useState<number | null>(null);
  const [roomOnFloor, setRoomOnFloor] = useState<number | null>(null);
  const [settlersInRoom, setSettlersInRoom] = useState<number | null>(null);
  const dispatch = useDispatch();
  const newDormitrySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newDormitory = {
      floors_count: floors,
      rooms_on_floor_count: roomOnFloor,
      address: address,
      places_in_room_count: settlersInRoom,
      university_info: universityName,
    } as Dormitory;
    dispatch(addUserDormitoryAction(newDormitory));
    setModalActive(false);
  };

  return (
    <section className="new-dormitry">
      <h2 className="new-dormitry__header">Заполните данные об общежитии</h2>
      <form className="new-dormitry__form" onSubmit={newDormitrySubmit}>
        <label htmlFor="name" className="new-dormitry__label">
          Университет
        </label>
        <div className="new-dormitry__input">
          <MyInput
            name="name"
            id="name"
            value={universityName}
            change={setUniversityName}
          />
        </div>
        <label htmlFor="adress" className="new-dormitry__label">
          Адрес
        </label>
        <div className="new-dormitry__input">
          <MyInput
            name="adress"
            id="adress"
            value={address}
            change={setAddress}
          />
        </div>
        <label htmlFor="floors" className="new-dormitry__label">
          Количество этажей
        </label>
        <div className="new-dormitry__input">
          <MyInput
            name="floors"
            id="floors"
            type="number"
            value={floors}
            change={setFloors}
          />
        </div>
        <label htmlFor="rooms" className="new-dormitry__label">
          Количество комнат на этаже
        </label>
        <div className="new-dormitry__input">
          <MyInput
            name="rooms"
            id="rooms"
            type="number"
            value={roomOnFloor}
            change={setRoomOnFloor}
          />
        </div>
        <label htmlFor="settlers" className="new-dormitry__label">
          Количество проживающих в комнате
        </label>
        <div className="new-dormitry__input">
          <MyInput
            name="settlers"
            id="settlers"
            type="number"
            value={settlersInRoom}
            change={setSettlersInRoom}
          />
        </div>
        <div className="new-dormitry__buttons">
          <MyFillButton>Сохранить</MyFillButton>
          <MyClearButton setModalActive={setModalActive}>Отмена</MyClearButton>
        </div>
      </form>
    </section>
  );
};

export default NewDormitry;
