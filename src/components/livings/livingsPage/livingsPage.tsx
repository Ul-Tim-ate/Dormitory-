import React from "react";
import DomitryNav from "../../domitry/dormitryNav/domitryNav";
import Header from "../../header/header";
import LivingsContent from "../livingsContent/livingsContent";
import "./livingsPage.sass";

const LivingsPage = () => {
  return (
    <div className="livings-page">
      <Header />
      <div className="livings-page__content container">
        <div className="livings-page__nav">
          {/* <DomitryNav /> */}
        </div>
        <div className="livings-page__table">
          <LivingsContent/>
        </div>
      </div>
    </div>
  );
};

export default LivingsPage;
