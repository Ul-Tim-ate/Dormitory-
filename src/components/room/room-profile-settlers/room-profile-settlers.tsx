import React from "react";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { IStudent } from "../../../models/student";
import Table from "../../table/table";
import LoadingSpinner from "../../UI/loading-spinner/my-spinner";
import "./room-profile-settlers.sass";

const RoomProfileSettlers = () => {
  const headers = ["ФИО", "Телефон", "ФЛГ", "Комната"];
  const { id } = useParams();
  const { students }: { students: IStudent[] } = useTypedSelector(
    (state) => state.roomProfileReducer
  );
  return (
    <section className="room-profile-settlers">
      <h2 className="room-profile-settlers__header">Информация о жильцах</h2>
      <div className="room-profile-settlers__table">
        <Table
          headers={headers}
          path={`/domitry/${id}/students`}
          rows={students}
        />
      </div>
    </section>
  );
};

export default RoomProfileSettlers;
