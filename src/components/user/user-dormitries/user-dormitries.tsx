import React, { useEffect, FC } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { IDormitry } from "../../../models/dormitry";
import { getUserDormitriesAction } from "../../../store/actions/dormitry-actions";
import DormitryList from "../../domitry/dormitry-list/dormitry-list";
import "./user-dormitries.sass";

interface UserDormitriesProps {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserDormitries: FC<UserDormitriesProps> = ({ setModalActive }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDormitriesAction());
  }, []);
  const { dormitories }: { dormitories: IDormitry[] } = useTypedSelector(
    (state) => state.dormitryReducer
  );
  return (
    <section className="user-dormitries">
      <div className="user-dormitries__top">
        <h2 className="user-dormitries__header">Мои общежития</h2>
        <span className="user-dormitries__top-href">
          Управление общежитиями
        </span>
      </div>
      <div className="user-dormitries__list">
        <DormitryList
          domitryItems={dormitories}
          setModalActive={setModalActive}
        />
      </div>
    </section>
  );
};

export default UserDormitries;
