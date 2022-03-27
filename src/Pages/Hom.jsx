import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Hours from "../Components/Hours";
import Top from "../Components/Top";
import Menu from "../Components/Menu";
import Info from "../Components/Info";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function Hom() {
  return (
    <div className="hom">
      <Header />
      <Hero />
      <main className="main">
        <Top />
        <Menu />
        <Hours />
        <Info />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

export default Hom;
