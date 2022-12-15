import React from "react";
import "./table.sass";

const Table = () => {
  return (
    <table className="dorm-table" cellSpacing={0}>
      <tbody>
        <tr className="dorm-table__header-row">
          <th className="dorm-table__header">ФИО</th>
          <th className="dorm-table__header">Время записи</th>
          <th className="dorm-table__header">Университет</th>
          <th className="dorm-table__header">Телефон</th>
          <th className="dorm-table__header">ФЛГ</th>
        </tr>
        <tr>
          <td className="dorm-table__cell">
            <b>Кузнецов Янис Дмитриевич</b> <br /> example@niuitmo.ru
          </td>
          <td className="dorm-table__cell">16:00</td>
          <td className="dorm-table__cell">ИТМО</td>
          <td className="dorm-table__cell">8 800 555 35 35</td>
          <td className="dorm-table__cell">Да</td>
        </tr>
        <tr>
          <td className="dorm-table__cell">
            <b>Кузнецов Янис Дмитриевич</b> <br /> example@niuitmo.ru
          </td>
          <td className="dorm-table__cell">16:00</td>
          <td className="dorm-table__cell">ИТМО</td>
          <td className="dorm-table__cell">8 800 555 35 35</td>
          <td className="dorm-table__cell">Да</td>
        </tr>
        <tr>
          <td className="dorm-table__cell">
            <b>Кузнецов Янис Дмитриевич</b> <br /> example@niuitmo.ru
          </td>
          <td className="dorm-table__cell">16:00</td>
          <td className="dorm-table__cell">ИТМО</td>
          <td className="dorm-table__cell">8 800 555 35 35</td>
          <td className="dorm-table__cell">Да</td>
        </tr>
        <tr>
          <td className="dorm-table__cell">
            <b>Кузнецов Янис Дмитриевич</b> <br /> example@niuitmo.ru
          </td>
          <td className="dorm-table__cell">16:00</td>
          <td className="dorm-table__cell">ИТМО</td>
          <td className="dorm-table__cell">8 800 555 35 35</td>
          <td className="dorm-table__cell">Да</td>
        </tr>
        <tr>
          <td className="dorm-table__cell">
            <b>Кузнецов Янис Дмитриевич</b> <br /> example@niuitmo.ru
          </td>
          <td className="dorm-table__cell">16:00</td>
          <td className="dorm-table__cell">ИТМО</td>
          <td className="dorm-table__cell">8 800 555 35 35</td>
          <td className="dorm-table__cell">Да</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
