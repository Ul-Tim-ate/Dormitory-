import React, { useEffect } from "react";
import DomitryInfo from "../domitryInfo/domitryInfo";
import DomitryNav from "../dormitryNav/domitryNav";
import Header from "../../header/header";
import "./dormitryPage.sass";
import DomitryVisual from "../domitryVisual/domitryVisual";
import { useTypedSelector } from "../../../hooks/use-typed-selector";
import { IDormitry } from "../../../models/dormitry";
import { useParams } from "react-router-dom";

const DormitryPage = () => {
  const { dormitories }: { dormitories: IDormitry[] } = useTypedSelector(
    (state) => state.dormitryReducer
  );
  let { id } = useParams();
  let dormitoryId = -1;
  if (id) {
    dormitoryId = Number.parseInt(id);
  }
  const currentDormitory = dormitories.find((el) => el.id == dormitoryId);
  if (!currentDormitory) {
    throw new Error("Такой общаги нет");
  }
  return (
    <div className="dormitry">
      <Header />
      <section className="dormitry__content container">
        <DomitryNav id={dormitoryId} />
        <div>
          <DomitryInfo {...currentDormitory} />
          <DomitryVisual
            all={
              currentDormitory.roomsCountOnFloor *
              currentDormitory.roomCountPlaces *
              currentDormitory.floorsCount
            }
            buzy={currentDormitory.busyPlaces}
          />
        </div>
      </section>
    </div>
  );
};

export default DormitryPage;
