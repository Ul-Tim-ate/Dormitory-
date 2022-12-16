import React, { useEffect, FC } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { IDormitry } from "../../../models/dormitry";
import { getUserDormitriesAction } from "../../../store/actions/dormitry-actions";
import DormitryList from "../../domitry/dormitry-list/dormitry-list";
import LoadingSpinner from "../../UI/loading-spinner/my-spinner";
import "./user-dormitries.sass";

interface UserDormitriesProps {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserDormitries: FC<UserDormitriesProps> = ({ setModalActive }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDormitriesAction());
  }, []);
  const {
    dormitories,
    getDormitories,
  }: { dormitories: IDormitry[]; getDormitories: boolean } = useTypedSelector(
    (state) => state.dormitryReducer
  );
  const displayDormitories = getDormitories ? (
    <DormitryList domitryItems={dormitories} setModalActive={setModalActive} />
  ) : (
    <LoadingSpinner />
  );

  return (
    <section className="user-dormitries">
      <div className="user-dormitries__top">
        <h2 className="user-dormitries__header">Мои общежития</h2>
        <span className="user-dormitries__top-href">
          Управление общежитиями
        </span>
      </div>
      <div className="user-dormitries__list">{displayDormitories}</div>
    </section>
  );
};

export default UserDormitries;
