import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { ISettler } from "../../../models/settler";
import { fetchSettlersAction } from "../../../store/actions/settlers-actions";
import Table from "../../table/table";
import LoadingSpinner from "../../UI/loading-spinner/my-spinner";
import "./settlers-table.sass";

const SettlersTable = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  if (!id) {
    throw new Error("нет id в url settlersTable");
  }
  const {
    settlers,
    getSettlers,
  }: { settlers: ISettler[]; getSettlers: boolean } = useTypedSelector(
    (state) => state.settlersReducer
  );

  useEffect(() => {
    dispatch(fetchSettlersAction(Number.parseInt(id)));
  }, []);

  const headers = ["ФИО", "Телефон", "ФЛГ"];
  if (!getSettlers) {
    return (
      <div className="settlers-table__loading">
        <LoadingSpinner />
      </div>
    );
  }
  return <Table rows={settlers} headers={headers} />;
};

export default SettlersTable;
