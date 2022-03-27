import React from "react";
import "./Modal.css";
import { useContext } from "react";
import { Context } from "../../Context/openModalContext";
import { ContextId } from "../../Context/modalIdContext";
import Liberi from "../../Assets/Liberi/Liberi";

function Modal() {
  let { setOpenModall } = useContext(Context);
  let { modalId } = useContext(ContextId);

  function arr() {
    return Liberi[modalId].desc.map((e) => (
      <li key={e} className="modal__desc">
        {e}
      </li>
    ));
  }

  return (
    <div className="modals">
      <div className=" modal">
        <button className="modal__btn" onClick={() => setOpenModall(false)}>
          x
        </button>
        <h3 className="modal__title">{Liberi[modalId].title}</h3>
        <ul>{arr()}</ul>
      </div>

      <div className="overlay" onClick={() => setOpenModall(false)}></div>
    </div>
  );
}

export default Modal;
