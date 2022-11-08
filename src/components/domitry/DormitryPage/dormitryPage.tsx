import React from "react";
import DomitryInfo from "../DomitryInfo/domitryInfo";
import DomitryNav from "../DormitryNav/domitryNav";
import Header from "../../header/header";

import "./dormitryPage.sass";
import DomitryVisual from "../DomitryVisual/domitryVisual";

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
