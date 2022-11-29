import React from "react";
import DomitryNav from "../domitry/dormitryNav/domitryNav";
import Header from "../header/header";
import SettlersProfile from "../settlers/settlersProfile/settlersProfile";
import "./settlers-profile-page.sass";

const SettlersProfilePage = () => {
  return (
    <section className="settlers-profile-page">
      <div className="container">
        <Header />
        <div className="settlers-profile-page__content">
          <div className="settlers-profile-page__nav">
            <DomitryNav />
          </div>
          <div className="settlers-profile-page__profile">
            <SettlersProfile />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SettlersProfilePage;
