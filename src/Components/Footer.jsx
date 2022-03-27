import React from "react";
import phone from "../Assets/img/phone.svg";
import telegram from "../Assets/img/telegram.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__top">
          <h2 className="footer__title">Shodlik klinikasi</h2>

          <p className="footer__desc">
            Tibbiyotda yetakchilik Mukammallik, g'amxo'rlik.
          </p>

          <div className="footer__contact">
            <h3 className="footer__contact_title">Aloqa uchun</h3>

            <a href="tel:+998951447722" className="footer__contact_link">
              Tell: (95) 144 77 22
            </a>

            <a
              href="https://t.me/Shodlikklinikasi "
              target="blanc"
              className="footer__contact_link"
            >
              Telegram: t.me/Shodlikklinikasi
            </a>
          </div>
        </div>

        <hr className="footer__line" />
        <div className="footer__bot">
          <p>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</p>
          <div className="footer__bot_lincs">
            <a
              href="https://t.me/Shodlikklinikasi"
              target="blanc"
              className="footer__lincs"
            >
              <img src={telegram} alt="" width="30" height="30" />
            </a>
            <a href="tel:+998951447722" className="footer__lincs">
              <img src={phone} alt="" width="30" height="30" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
