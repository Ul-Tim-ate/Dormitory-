import React, { useState } from "react";
import "./settlers-profile.sass";
import profileImg from "./settlers-img.svg";
import studentIcon from "./student.png";
import mailIcon from "./mail.png";
import phoneIcon from "./phone.png";
import flgIcon from "./flg.png";
import mark from "./mark.png";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import LoadingSpinner from "../../UI/loading-spinner/my-spinner";
import { ISettler } from "../../../models/settler";
import { useDispatch } from "react-redux";
import { deleteSettlerProfileAction } from "../../../store/actions/settler-profile-action";
import { useNavigate, useParams } from "react-router-dom";
import RoomList from "../../room/room-list/room-list";

const SettlersProfile = () => {
  const { settler, getSettler }: { settler: ISettler; getSettler: boolean } =
    useTypedSelector((state) => state.settlerProfileReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [roomList, setRoomList] = useState(false);
  const { id = "0", settlerId = "0" } = useParams();
  if (!getSettler) {
    return (
      <div className="settlers-table__loading">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <section className="settlers-profile">
      <div className="settlers-profile__top">
        <nav className="settlers-profile__nav">
          <ul className="settlers-profile__nav-list">
            <li className="settlers-profile__nav-item">На заселение</li>
            <li className="settlers-profile__nav-item">Карточка студента</li>
          </ul>
        </nav>
        <span className="settlers-profile__rewrite">Редактировать</span>
      </div>
      <div className="settlers-profile__info">
        <img
          src={profileImg}
          alt="Фотография заселенца"
          className="settlers-profile__img"
        />
        <div className="settlers-profile__text">
          <h2 className="settlers-profile__name">{settler.fullname}</h2>
          <ul className="settlers-profile__list">
            <li className="settlers-profile__list-item">
              <img
                src={mailIcon}
                alt=""
                className="settlers-profile__list-img"
              />
              {settler.email}
            </li>
            <li className="settlers-profile__list-item">
              <img
                src={phoneIcon}
                alt=""
                className="settlers-profile__list-img"
              />
              {settler.phone}
            </li>
            <li className="settlers-profile__list-item">
              <img
                src={settler.flg ? flgIcon : mark}
                alt=""
                className="settlers-profile__list-img"
              />
              Флюорография
            </li>
          </ul>
        </div>
      </div>
      <div className="settlers-profile__btns">
        <button
          className="settlers-profile__btn"
          onClick={() => {
            setRoomList(true);
          }}
        >
          Подобрать комнату
        </button>
        <button
          className="settlers-profile__btn settlers-profile__btn-del"
          onClick={() => {
            dispatch(
              deleteSettlerProfileAction(
                Number.parseInt(id),
                Number.parseInt(settlerId)
              )
            );
            navigate(`/domitry/${id}/settlers`);
          }}
        >
          Удалить
        </button>
      </div>
      {roomList ? (
        <div className="settlers-profile__room-list">
          <RoomList />
        </div>
      ) : (
        <></>
      )}
    </section>
  );
};

export default SettlersProfile;