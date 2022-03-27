import React from "react";
import Doitaimg from "../Assets/img/doira-imd.png";

function Hours() {
  return (
    <div className="hours">
      <div className="container hours__container">
        <div className="hours__left">
          <img src={Doitaimg} alt="" width="560" height="504" />
        </div>

        <div className="hours__right">
          <div className="hours__box">
            <h2 className="hours__title">Ish vaqtlari</h2>
            <ul className="hours__list">
              <li className="hours__item">
                <p className="hours__item_desc">Dushanba</p>
                <div className="line">-</div>
                <p className="hours__item_desc1">08:00 - 19:00 PM</p>
              </li>

              <li className="hours__item">
                <p className="hours__item_desc">Seshanba</p>

                <div className="line">-</div>
                <p className="hours__item_desc1">08:00 - 19:00 PM</p>
              </li>

              <li className="hours__item">
                <p className="hours__item_desc">Chorshanba</p>

                <div className="line">-</div>
                <p className="hours__item_desc1">08:00 - 19:00 PM</p>
              </li>

              <li className="hours__item">
                <p className="hours__item_desc">Payshanba</p>

                <div className="line">-</div>
                <p className="hours__item_desc1">08:00 - 19:00 PM</p>
              </li>

              <li className="hours__item">
                <p className="hours__item_desc">Juma</p>

                <div className="line">-</div>
                <p className="hours__item_desc1">08:00 - 19:00 PM</p>
              </li>

              <li className="hours__item">
                <p className="hours__item_desc">Shanba</p>

                <div className="line">-</div>
                <p className="hours__item_desc1">08:00 - 19:00 PM</p>
              </li>

              <li className="hours__item">
                <p className="hours__item_desc">Yakshanba</p>

                <div className="line">-</div>
                <p className="hours__item_desc1">Damolish kuni</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hours;
