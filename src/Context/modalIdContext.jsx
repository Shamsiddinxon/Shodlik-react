import React from "react";
import { createContext, useState } from "react";

const ContextId = createContext();

function Providers({ children }) {
  const [modalId, setModalId] = useState(1);
  return (
    <ContextId.Provider value={{ modalId, setModalId }}>
      {children}
    </ContextId.Provider>
  );
}

export { ContextId, Providers };
