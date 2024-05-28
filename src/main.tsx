import React from "react";
import ReactDOM from "react-dom/client";
import { CustomProvider } from "rsuite";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import App from "./App.tsx";
import "./index.css";
import "rsuite/dist/rsuite.min.css";

config.autoAddCss = false;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CustomProvider>
      <App />
    </CustomProvider>
    <App />
  </React.StrictMode>
);
