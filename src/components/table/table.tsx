import React, { FC } from "react";
import "./table.sass";
import { ISettler } from "../../models/settler";
import { Link, useParams } from "react-router-dom";
import { IStudent } from "../../models/student";
import { IRoom } from "../../models/room";

interface TableProps {
  rows: ISettler[] | IStudent[] | IRoom[];
  headers: string[];
  path: string;
}

const Table: FC<TableProps> = ({ rows, headers, path }) => {
  return (
    <table className="dorm-table" cellSpacing={0}>
      <tbody>
        <tr className="dorm-table__header-row">
          {headers.map((el) => {
            return (
              <th className="dorm-table__header" key={el}>
                {el}
              </th>
            );
          })}
        </tr>
        {rows.map((el) => {
          let newRow;
          if ("fullname" in el && "email" in el) {
            newRow = (
              <td className="dorm-table__cell">
                <Link to={`${path}/${el.id}`}>
                  <b>{el.fullname}</b> <br /> {el.email}
                </Link>
              </td>
            );
          }
          if ("roomNumber" in el) {
            newRow = (
              <td className="dorm-table__cell">
                <Link to={`${path}/${el.roomNumber}`}>
                  <b>{el.roomNumber}</b>
                </Link>
              </td>
            );
          }
          for (const key in el) {
            if (Object.prototype.hasOwnProperty.call(el, key)) {
              if (
                key === "fullname" ||
                key === "id" ||
                key === "email" ||
                key === "dormitory" ||
                key === "roomNumber"
              ) {
                continue;
              }
              if (key === "flg") {
                newRow = (
                  <>
                    {newRow}
                    <td className="dorm-table__cell">
                      {el[key as keyof typeof el] ? "Есть" : " Нет"}
                    </td>
                  </>
                );
                continue;
              }
              newRow = (
                <>
                  {newRow}
                  <td className="dorm-table__cell">
                    {el[key as keyof typeof el]}
                  </td>
                </>
              );
            }
          }
          return <tr key={el.id}>{newRow}</tr>;
        })}
      </tbody>
    </table>
  );
};

export default Table;
