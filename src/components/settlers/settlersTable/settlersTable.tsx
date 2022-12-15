import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { ISettler } from "../../../models/settler";
import { fetchSettlersAction } from "../../../store/actions/settlers-actions";
import Table from "../../table/table";

const SettlersTable = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  if (!id) {
    throw new Error("нет id в url settlersTable");
  }
  const { settlers }: { settlers: ISettler[] } = useTypedSelector(
    (state) => state.settlersReducer
  );

  if (!settlers.length) {
    dispatch(fetchSettlersAction(Number.parseInt(id)));
  }
  return <Table />;
};

export default SettlersTable;
