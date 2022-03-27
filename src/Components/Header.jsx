import React from "react";
import Locat from "../Assets/img/lokatsiya.svg";
import Tell from "../Assets/img/tell.png";
import Logo from "../Assets/img/logo.svg";

function Header() {
  return (
    <div className="Header">
      <header className="headers">
        <h1 className="visually-hidden">klinikashodlik</h1>
        <h1 className="visually-hidden">shodlik</h1>
        <div className="header">
          <div className="container header__container">
            <div className="header__logo1">
              <a href="#" className="header__logo">
                <img src={Logo} alt="" width="108" height="92" />
                <p>klinika</p>
              </a>
            </div>

            <div className="header__contact">
              <a href="tel:+998951447722" className="header__link tel">
                <img src={Tell} alt="" />
                <div>
                  <h3 className="header__link-title">tell</h3>
                  <p className="header__link-desc">(95) 144-77-22</p>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/place/41%C2%B018'08.0%22N+69%C2%B038'09.3%22E/@41.302224,69.6353926,16.45z/data=!4m5!3m4!1s0x0:0x23bfada7c3357adb!8m2!3d41.30223!4d69.635907"
                className="header__link lokation"
                target="blanc"
              >
                <img src={Locat} alt="" />
                <div>
                  <h3 className="header__link-title">joylashuv</h3>
                  <p className="header__link-desc">8J2P Parkent</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="header__contact1">
          <a href="tel:+998951447722" className="header__link tel">
            <img src={Tell} alt="" />
            <div>
              <h3 className="header__link-title">tell</h3>
              <p className="header__link-desc">(95) 144-77-22</p>
            </div>
          </a>

          <a
            href="https://www.google.com/maps/place/41%C2%B018'08.0%22N+69%C2%B038'09.3%22E/@41.302224,69.6353926,16.45z/data=!4m5!3m4!1s0x0:0x23bfada7c3357adb!8m2!3d41.30223!4d69.635907"
            className="header__link lokation"
          >
            <img src={Locat} alt="" />
            <div>
              <h3 className="header__link-title">joylashuv</h3>
              <p className="header__link-desc">8J2P Parkent</p>
            </div>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
