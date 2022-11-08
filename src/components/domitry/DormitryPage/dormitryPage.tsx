import React from "react";
import DomitryInfo from "../domitryInfo/domitryInfo";
import DomitryNav from "../dormitryNav/domitryNav";
import Header from "../../header/header";

import "./dormitryPage.sass";
import DomitryVisual from "../domitryVisual/domitryVisual";

const DormitryPage = () => {
  return (
    <div className="dormitry">
      <Header />
      <section className="dormitry__content container">
        <DomitryNav />
        <div>
          <DomitryInfo />
          <DomitryVisual />
        </div>
      </section>
    </div>
  );
};

export default DormitryPage;
