import React, { FC } from "react";
import { IDormitry } from "../../../models/dormitry";
import PlusDormitry from "../../UI/plus-dormitry/plus-dormitry";
import DormitryItem from "../dormitry-item/dormitry-item";
import "./dormitry-list.sass";

interface DormitryListProps {
  domitryItems: IDormitry[];
  setModalActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const DormitryList: FC<DormitryListProps> = ({
  domitryItems,
  setModalActive,
}) => {
  return (
    <ul className="dormitry-list">
      {domitryItems.map((domitryItem) => {
        return <DormitryItem {...domitryItem} key={domitryItem.id} />;
      })}
      <li>
        <PlusDormitry setModalActive={setModalActive} />
      </li>
    </ul>
  );
};

export default DormitryList;
