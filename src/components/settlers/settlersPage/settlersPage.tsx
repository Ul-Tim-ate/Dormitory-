import React from "react";
import { useParams } from "react-router-dom";
import DomitryNav from "../../domitry/dormitryNav/domitryNav";
import Header from "../../header/header";
import SettlersContent from "../settlersContent/settlersContent";

import "./settlersPage.sass";

const Settlers = () => {
  let { id } = useParams();
  let dormitoryId = -1;
  if (id) {
    dormitoryId = Number.parseInt(id);
  }

  return (
    <div className="settlers-page">
      <Header />
      <div className="settlers-page__content container">
        <div className="settlers-page__nav">
          <DomitryNav id={dormitoryId} />
        </div>
        <div className="settlers-page__table">
          <SettlersContent />
        </div>
      </div>
    </div>
  );
};

export default Settlers;
