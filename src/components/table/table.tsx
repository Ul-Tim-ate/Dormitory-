import React, { FC } from "react";
import "./table.sass";
import { ISettler } from "../../models/settler";

interface TableProps {
  arr: ISettler[];
}

const Table: FC<TableProps> = ({ arr }) => {
  return (
    <table className="dorm-table" cellSpacing={0}>
      <tbody>
        <tr className="dorm-table__header-row">
          <th className="dorm-table__header">ФИО</th>
          <th className="dorm-table__header">Телефон</th>
          <th className="dorm-table__header">ФЛГ</th>
        </tr>
        {arr.map((el) => {
          return (
            <tr key={el.email}>
              <td className="dorm-table__cell">
                <b>{el.fullname}</b> <br /> {el.email}
              </td>
              <td className="dorm-table__cell">{el.phone}</td>
              <td className="dorm-table__cell">{el.flg ? "Есть" : "Нет"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
