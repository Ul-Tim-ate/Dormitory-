import React, { FC } from "react";
import SettlersAddButton from "../settlersAddButton/settlersAddButton";
import SettlersSearchPanel from "../settlersSearchPanel/settlersSearchPanel";
import SettlersTable from "../settlersTable/settlersTable";
import "./settlersContent.sass";

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
