import React from "react";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import Table from "../../table/table";
import LoadingSpinner from "../../UI/loading-spinner/my-spinner";

const LivingsTabel = () => {
  const students = useTypedSelector((state) => state.studentsReducer);
  const { id } = useParams();
  const headers = ["ФИО", "Телефон", "ФЛГ", "Комната"];
  if (!students.getStudents) {
    return (
      <div className="settlers-table__loading">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <Table
      rows={students.students}
      headers={headers}
      path={`/domitry/${id}/students`}
    />
  );
};

export default LivingsTabel;
