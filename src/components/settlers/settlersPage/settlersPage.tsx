import React from "react";
import DomitryNav from "../../domitry/dormitryNav/domitryNav";
import Header from "../../header/header";
import SettlersInfo from "../settlersInfo/settlersInfo";

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
          <SettlersInfo />
        </div>
      </div>
    </div>
  );
};

export default Settlers;
