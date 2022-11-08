import React from "react";
import SettlersAddButton from "../settlersAddButton/settlersAddButton";
import SettlersSearchPanel from "../settlersSearchPanel/settlersSearchPanel";
import SettlersTable from "../settlersTable/settlersTable";
import "./settlersInfo.sass";

const SettlersInfo = () => {
  return (
    <section className="settlers-info">
      <h2 className="settlers-info__header">Ожидают заселения</h2>
      <div className="settlers-info__top-panel">
        <div className="settlers-info__search">
          <SettlersSearchPanel />
        </div>
        <SettlersAddButton />
      </div>
      <SettlersTable />
    </section>
  );
};

export default SettlersInfo;
