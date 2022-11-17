import React, { FC } from "react";
import "./MyBreadCrumbs.sass";

interface MyBreadCrumbsProps {
  path: string[];
}

const MyBreadCrumbs: FC<MyBreadCrumbsProps> = ({ path }) => {
  return (
    <nav className="my-bread-crumbs">
      <ul className="my-bread-crumbs__list">
        {path.map((item) => {
          return <li className="my-bread-crumbs__item">{item}</li>;
        })}
      </ul>
    </nav>
  );
};

export default MyBreadCrumbs;
