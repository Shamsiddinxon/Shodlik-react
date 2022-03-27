import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider as ModalProvider } from "./Context/openModalContext";
import { Providers as IdProvider } from "./Context/modalIdContext";

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <IdProvider>
        <App />
      </IdProvider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
