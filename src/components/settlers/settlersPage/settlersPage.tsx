import React from "react";
import DomitryNav from "../../domitry/dormitryNav/domitryNav";
import Header from "../../header/header";
import SettlersContent from "../settlersContent/settlersContent";

import "./settlersPage.sass";

const Settlers = () => {
  return (
    <div className="settlers-page">
      <Header />
      <div className="settlers-page__content container">
        <div className="settlers-page__nav">
          <DomitryNav />
        </div>
        <div className="settlers-page__table">
          <SettlersContent />
        </div>
      </div>
    </div>
  );
};

export default Settlers;
