import React from "react";
// import Strelka from "../Assets/img/strelka.png";
import Modal from "./Component/Modal";
import { useContext } from "react";
import { ContextId } from "../Context/modalIdContext";
import { Context } from "../Context/openModalContext";

function Menu() {
  const { openModal, setOpenModall } = useContext(Context);
  const { setModalId } = useContext(ContextId);

  return (
    <div className="menu" id="menu">
      <div className="container menu__container">
        <h3 className="menu__title1">Laboratoria</h3>
        <h2 className="menu__title">Bizning Hizmatlar</h2>
        <div className="menu__box">
          <dialog open={openModal}>
            <Modal />
          </dialog>
          <ul className="menu__list">
            <li
              className="menu__item"
              onClick={(e) => {
                setOpenModall(true);
                setModalId(0);
              }}
            >
              <a className="menu__item-link">Asosiy biokimyo</a>
            </li>

            <li
              className="menu__item"
              onClick={(e) => {
                setOpenModall(true);
                setModalId(1);
              }}
            >
              <a className="menu__item-link">Komplex biokimyo</a>
            </li>

            <li
              className="menu__item"
              onClick={(e) => {
                setOpenModall(true);
                setModalId(2);
              }}
            >
              <a className="menu__item-link">Jigar biokimyosi</a>
            </li>

            <li
              className="menu__item"
              onClick={(e) => {
                setOpenModall(true);
                setModalId(3);
              }}
            >
              <a className="menu__item-link">Lipid profili</a>
            </li>

            <li
              className="menu__item"
              onClick={(e) => {
                setOpenModall(true);
                setModalId(4);
              }}
            >
              <a className="menu__item-link">Qondagi elektrolitlar</a>
            </li>

            <li
              className="menu__item"
              onClick={(e) => {
                setOpenModall(true);
                setModalId(5);
              }}
            >
              <a className="menu__item-link">Expres testlar</a>
            </li>

            <li
              className="menu__item"
              onClick={(e) => {
                setOpenModall(true);
                setModalId(6);
              }}
            >
              <a className="menu__item-link">Revmatalogik tuzulish</a>
            </li>

            <li
              className="menu__item"
              onClick={(e) => {
                setOpenModall(true);
                setModalId(7);
              }}
            >
              <a className="menu__item-link">Umumiy klinik taxlilla</a>
            </li>

            <li
              className="menu__item"
              onClick={(e) => {
                setOpenModall(true);
                setModalId(8);
              }}
            >
              <a className="menu__item-link">Gormonal tadqiqotlar</a>
            </li>

            <li
              className="menu__item"
              onClick={(e) => {
                setOpenModall(true);
                setModalId(9);
              }}
            >
              <a className="menu__item-link">Qalqonsimon bez funktsiyalari</a>
            </li>

            <li
              className="menu__item"
              onClick={(e) => {
                setOpenModall(true);
                setModalId(10);
              }}
            >
              <a className="menu__item-link">SARS COV-19 </a>
            </li>
          </ul>
          <ul className="menu__list menu__list1">
            <li
              className="menu__item"
              onClick={(e) => {
                setOpenModall(true);
                setModalId(11);
              }}
            >
              <a className="menu__item-link">PCR diagnostikasi</a>
            </li>

            <li
              className="menu__item"
              onClick={(e) => {
                setOpenModall(true);
                setModalId(12);
              }}
            >
              <a className="menu__item-link">To'liq koagulogramma</a>
            </li>

            <li
              className="menu__item"
              onClick={(e) => {
                setOpenModall(true);
                setModalId(13);
              }}
            >
              <a className="menu__item-link">Gormonlarning boshqa turlari</a>
            </li>

            <li
              className="menu__item"
              onClick={(e) => {
                setOpenModall(true);
                setModalId(14);
              }}
            >
              <a className="menu__item-link">O'simta belgilari</a>
            </li>

            <li
              className="menu__item"
              onClick={(e) => {
                setOpenModall(true);
                setModalId(15);
              }}
            >
              <a className="menu__item-link">Torch infeksiyalar</a>
            </li>

            <li
              className="menu__item"
              onClick={(e) => {
                setOpenModall(true);
                setModalId(16);
              }}
            >
              <a className="menu__item-link">Virusli va bakterial infektsiya</a>
            </li>

            <li
              className="menu__item"
              onClick={(e) => {
                setOpenModall(true);
                setModalId(17);
              }}
            >
              <a className="menu__item-link">Parazitar tadqiqotlar</a>
            </li>

            <li
              className="menu__item"
              onClick={(e) => {
                setOpenModall(true);
                setModalId(18);
              }}
            >
              <a className="menu__item-link">Immunologik tadqiqot </a>
            </li>

            <li
              className="menu__item"
              onClick={(e) => {
                setOpenModall(true);
                setModalId(19);
              }}
            >
              <a className="menu__item-link">Baktriologik tadqiqotlar</a>
            </li>

            <li
              className="menu__item"
              onClick={(e) => {
                setOpenModall(true);
                setModalId(20);
              }}
            >
              <a className="menu__item-link">Laboratoriyaning boshqa turlari</a>
            </li>
          </ul>
        </div>

        {/* <a className="menu__btn">
          Hammasini ko'rish
          <img src={Strelka} alt="" width="19" height="18" />
        </a> */}
      </div>

      {/* <Modal /> */}
    </div>
  );
}

export default Menu;
