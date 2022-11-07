import React from "react";
import DomitryInfo from "../DomitryInfo/domitryInfo";
import DomitryNav from "../DormitryNav/domitryNav";
import Header from "../../Header/header";

import "./dormitryPage.sass";
import DomitryVisual from "../DomitryVisual/domitryVisual";

const DormitryPage = () => {
  return (
    <div className="container">
      <Header />
      <section className="dormitry">
        <DomitryNav />
        <div>
          <DomitryInfo />
          <DomitryVisual/>
        </div>
      </section>
    </div>
  );
};

export default DormitryPage;
