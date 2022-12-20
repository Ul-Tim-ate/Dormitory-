import React, { useState } from "react";
import "./students-profile.sass";
import profileImg from "./students-img.svg";
import studentIcon from "./student.png";
import mailIcon from "./mail.png";
import phoneIcon from "./phone.png";
import flgIcon from "./flg.png";
import bed from "./bed.png";
import mark from "./mark.png";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import LoadingSpinner from "../../UI/loading-spinner/my-spinner";
import { ISettler } from "../../../models/settler";
import { useDispatch } from "react-redux";
import { deleteSettlerProfileAction } from "../../../store/actions/settler-profile-action";
import { useNavigate, useParams } from "react-router-dom";
import RoomList from "../../room/room-list/room-list";
import { IStudent } from "../../../models/student";
import {
  deleteStudentProfileAction,
  resellteStudentProfileAction,
} from "../../../store/actions/student-profile.-actions";

const StudentProfile = () => {
  const dispatch = useDispatch();
  const [roomList, setRoomList] = useState(false);
  const { student, getStudent }: { student: IStudent; getStudent: boolean } =
    useTypedSelector((state) => state.studentProfileReducer);
  const { id = "0", studentId = "0" } = useParams();
  const navigate = useNavigate();
  if (!getStudent) {
    return (
      <div className="students-profile__loading">
        <LoadingSpinner />
      </div>
    );
  }
  const displayButtons = !roomList ? (
    <div className="students-profile__btns">
      <button
        className="students-profile__btn students-profile__btn-resettle "
        onClick={() => {
          setRoomList(true);
        }}
      >
        Переселить
      </button>
      <button
        className="students-profile__btn students-profile__btn-remove"
        onClick={() => {
          dispatch(
            deleteStudentProfileAction(
              Number.parseInt(id),
              Number.parseInt(studentId)
            )
          );
          navigate(`/domitry/${id}/students`);
        }}
      >
        Выселить
      </button>
    </div>
  ) : (
    <div className="students-profile__room-list">
      <RoomList resellte={true} />
    </div>
  );
  return (
    <section className="students-profile">
      <div className="students-profile__top">
        <nav className="students-profile__nav">
          <ul className="students-profile__nav-list">
            <li className="students-profile__nav-item">Карточка студента</li>
          </ul>
        </nav>
        <span className="students-profile__rewrite">Редактировать</span>
      </div>
      <div className="students-profile__info">
        <img
          src={profileImg}
          alt="Фотография заселенца"
          className="students-profile__img"
        />
        <div className="students-profile__text">
          <h2 className="students-profile__name">{student.fullname}</h2>
          <ul className="students-profile__list">
            <li className="students-profile__list-item">
              <img src={bed} alt="" className="students-profile__list-img" />
              Комната {student.room}
            </li>
            <li className="students-profile__list-item">
              <img
                src={mailIcon}
                alt=""
                className="students-profile__list-img"
              />
              {student.email}
            </li>
            <li className="students-profile__list-item">
              <img
                src={phoneIcon}
                alt=""
                className="students-profile__list-img"
              />
              {student.phone}
            </li>
            <li className="students-profile__list-item">
              <img
                src={student.flg ? flgIcon : mark}
                alt=""
                className="students-profile__list-img"
              />
              Флюорография
            </li>
          </ul>
        </div>
      </div>
      {displayButtons}
    </section>
  );
};

export default StudentProfile;
