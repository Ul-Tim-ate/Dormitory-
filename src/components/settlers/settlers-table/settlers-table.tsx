import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { ISettler } from "../../../models/settler";
import Table from "../../table/table";
import LoadingSpinner from "../../UI/loading-spinner/my-spinner";
import "./settlers-table.sass";

const SettlersTable = () => {
  const { id } = useParams();
  const headers = ["ФИО", "Телефон", "ФЛГ"];
  if (!id) {
    throw new Error("нет id в url settlersTable");
  }
  const {
    settlers,
    getSettlers,
  }: { settlers: ISettler[]; getSettlers: boolean } = useTypedSelector(
    (state) => state.settlersReducer
  );

  if (!getSettlers) {
    return (
      <div className="settlers-table__loading">
        <LoadingSpinner />
      </div>
    );
  }
  return (
    <Table rows={settlers} headers={headers} path={`/domitry/${id}/settlers`} />
  );
};

export default SettlersTable;
