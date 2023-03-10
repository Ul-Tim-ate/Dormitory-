import React, { FC } from "react";
import "./my-breadcrumbs.sass";

interface MyBreadCrumbsProps {
  path: string[];
}

const MyBreadCrumbs: FC<MyBreadCrumbsProps> = ({ path }) => {
  return (
    <nav className="my-bread-crumbs">
      <ul className="my-bread-crumbs__list">
        {path.map((item) => {
          return (
            <li className="my-bread-crumbs__item" key={item + 12}>
              {item}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MyBreadCrumbs;
