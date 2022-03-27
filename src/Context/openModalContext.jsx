import React from "react";
import { createContext, useState } from "react";

const Context = createContext();

function Provider({ children }) {
  const [openModal, setOpenModall] = useState(false);
  return (
    <Context.Provider value={{ openModal, setOpenModall }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
