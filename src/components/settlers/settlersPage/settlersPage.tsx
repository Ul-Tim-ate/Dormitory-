import React, { useState } from "react";
import { useParams } from "react-router-dom";
import DomitryNav from "../../domitry/dormitryNav/domitryNav";
import NewStudent from "../../forms/new-student/newStudent";
import Header from "../../header/header";
import MyModal from "../../UI/my-modal/my-modal";
import SettlersContent from "../settlersContent/settlersContent";

import "./settlersPage.sass";

const SettlersPage = () => {
  const [modalActive, setModalActive] = useState(false);
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
          <SettlersContent setModalActive={setModalActive} />
        </div>
      </div>
      <MyModal active={modalActive} setActive={setModalActive}>
        <NewStudent setModalActive={setModalActive} />
      </MyModal>
    </div>
  );
};

export default SettlersPage;
