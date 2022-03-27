import React from "react";
import Tell from "../Assets/img/loocc.png";
import Telegram from "../Assets/img/telegram-5945.svg";
import loocimg from "../Assets/img/looc.png";
import lokatsiya from "../Assets/img/lokatsiya.svg";
import { YMaps, Map, Placemark } from "react-yandex-maps";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="container contact__container">
        <p className="contact__title1">Aloqa uchun</p>
        <h2 className="contact__title">Contact</h2>
        <ul className="contact__list">
          <li className="contact__item">
            <a href="tel:+998951447722">
              <img className="contact__item_img" src={Tell} alt="tell" />
            </a>

            <a href="tel:+998951447722" className="contact__item_title">
              tell
            </a>

            <a href="tel:+998951447722" className="contact__item_desc">
              +998 (95) 144 77 22
            </a>

            <a href="tel:+998935817722" className="contact__item_desc">
              +998 (93) 581 77 22
            </a>
          </li>

          <li className="contact__item">
            <a href="https://t.me/Shodlikklinikasi" target="blanc">
              <img
                className="contact__item_img"
                src={Telegram}
                width="35"
                alt="tell"
              />
            </a>

            <a
              href="https://t.me/Shodlikklinikasi"
              className="contact__item_title"
              target="blanc"
            >
              telegram
            </a>

            <a
              className="contact__item_desc"
              href="https://t.me/Shodlikklinikasi"
              target="blanc"
            >
              @Shodlikklinikasi
            </a>

            <a href="tel:+998935817722" className="contact__item_desc">
              +998 (93) 581 77 22
            </a>
          </li>

          <li className="contact__item">
            <a href="https://www.google.com/maps/place/41%C2%B018'08.0%22N+69%C2%B038'09.3%22E/@41.302224,69.6353926,16.45z/data=!4m5!3m4!1s0x0:0x23bfada7c3357adb!8m2!3d41.30223!4d69.635907">
              <img className="contact__item_img" src={lokatsiya} alt="tell" />
            </a>

            <a
              href="https://www.google.com/maps/place/41%C2%B018'08.0%22N+69%C2%B038'09.3%22E/@41.302224,69.6353926,16.45z/data=!4m5!3m4!1s0x0:0x23bfada7c3357adb!8m2!3d41.30223!4d69.635907"
              className="contact__item_title"
            >
              joylashuv
            </a>

            <a
              className="contact__item_desc"
              href="https://www.google.com/maps/place/41%C2%B018'08.0%22N+69%C2%B038'09.3%22E/@41.302224,69.6353926,16.45z/data=!4m5!3m4!1s0x0:0x23bfada7c3357adb!8m2!3d41.30223!4d69.635907"
            >
              Tashkent vil. Parkent sh.
            </a>

            <a
              href="https://www.google.com/maps/place/41%C2%B018'08.0%22N+69%C2%B038'09.3%22E/@41.302224,69.6353926,16.45z/data=!4m5!3m4!1s0x0:0x23bfada7c3357adb!8m2!3d41.30223!4d69.635907"
              className="contact__item_desc"
            >
              Parkent ko'chasi
            </a>
          </li>

          <li className="contact__item">
            <img className="contact__item_img" src={loocimg} alt="tell" />

            <h3 className="contact__item_title">ish vaqti</h3>

            <p href="tel:+998951447722" className="contact__item_desc">
              Dushanba-Shanba
            </p>

            <p href="tel:+998935817722" className="contact__item_desc">
              08:00-21:00
            </p>
          </li>
        </ul>
      </div>

      <div className="container  map__containers">
        <div className="map__container">
          <YMaps>
            <Map
              width="100%"
              height={350}
              defaultState={{
                center: [41.302306, 69.635856],
                zoom: 16,
              }}
            >
              <Placemark geometry={[41.302306, 69.635856]} />
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
}

export default Contact;
