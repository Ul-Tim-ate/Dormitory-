import React, { FC } from "react";
import PlusDormitry from "../../UI/plus-dormitry/plus-dormitry";
import DormitryItem, {
  DormitryItemProps,
} from "../dormitry-item/dormitry-item";
import "./dormitry-list.sass";

interface DormitryListProps {
  domitryItems: DormitryItemProps[];
}

const DormitryList: FC<DormitryListProps> = ({ domitryItems }) => {
  return (
    <ul className="dormitry-list">
      {domitryItems.map((domitryItem) => {
        return <DormitryItem {...domitryItem} />;
      })}
      <li><PlusDormitry/></li>
    </ul>
  );
};

export default DormitryList;
