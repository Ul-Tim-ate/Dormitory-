import React from "react";
import LivingsSearchPanel from "../livingsSearchPanel/livingsSearchPanel";
import LivingsTabel from "../livingsTabel/livingsTabel";

import "./livingsContent.sass";

const LivingsContent = () => {
  return (
    <section className="livings-content">
      <h2 className="livings-content__header">Проживающие в общежитии</h2>
      <div className="livings-content__search-panel">
        <LivingsSearchPanel />
      </div>
      <LivingsTabel />
    </section>
  );
};

export default LivingsContent;
