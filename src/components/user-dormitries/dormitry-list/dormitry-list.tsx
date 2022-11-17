import React, { FC } from "react";
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
    </ul>
  );
};

export default DormitryList;
