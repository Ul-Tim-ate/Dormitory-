import React, { FC } from "react";
import SettlersAddButton from "../settlers-add-button/settlers-add-button";
import SettlersSearchPanel from "../settlers-search-panel/settlers-search-panel";
import SettlersTable from "../settlers-table/settlers-table";
import "./settlers-content.sass";

interface SettlersContentProps {
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettlersContent: FC<SettlersContentProps> = ({ setModalActive }) => {
  return (
    <section className="settlers-info">
      <h2 className="settlers-info__header">Ожидают заселения</h2>
      <div className="settlers-info__top-panel">
        <div className="settlers-info__search">
          <SettlersSearchPanel />
        </div>
        <SettlersAddButton setModalActive={setModalActive} />
      </div>
      <SettlersTable />
    </section>
  );
};

export default SettlersContent;
