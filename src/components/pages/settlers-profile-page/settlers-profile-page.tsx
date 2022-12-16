import React from "react";
import DomitryNav from "../../domitry/dormitry-nav/domitry-nav";
import Header from "../../header/header";
import SettlersProfile from "../../settlers/settlers-profile/settlers-profile";
import "./settlers-profile-page.sass";

const SettlersProfilePage = () => {
  return (
    <section className="settlers-profile-page">
      <div className="container">
        <Header />
        <div className="settlers-profile-page__content">
          <div className="settlers-profile-page__nav">
            {/* <DomitryNav /> */}
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
