import React from "react";
import DomitryNav from "../../domitry/dormitryNav/domitryNav";
import Header from "../../header/header";
import SettlersContent from "../settlersContent/settlersContent";

import "./settlersPage.sass";

const Settlers = () => {
  return (
    <div className="settlersPage">
      <Header />
      <div className="settlersPage__content container">
        <div className="settlersPage__nav">
          <DomitryNav />
        </div>
        <div className="settlersPage__table">
          <SettlersContent />
        </div>
      </div>
    </div>
  );
};

export default Settlers;
