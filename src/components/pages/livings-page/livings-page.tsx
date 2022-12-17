import React from "react";
import { useParams } from "react-router-dom";
import DomitryNav from "../../domitry/dormitry-nav/domitry-nav";
import Header from "../../header/header";
import LivingsContent from "../../livings/livingsContent/livingsContent";
import "./livings-page.sass";

const LivingsPage = () => {
  const { id } = useParams();
  if (!id) {
    throw new Error("no id in url living page");
  }
  return (
    <div className="livings-page">
      <Header />
      <div className="livings-page__content container">
        <div className="livings-page__nav">
          <DomitryNav dormitoryId={Number.parseInt(id)} />
        </div>
        <div className="livings-page__table">
          <LivingsContent />
        </div>
      </div>
    </div>
  );
};

export default LivingsPage;
