import React from "react";
import ReactDOM from "react-dom/client";
import { CustomProvider } from "rsuite";
import { Provider } from "react-redux";
import { store } from "./redux/Store/store";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import App from "./App.tsx";
import "./index.css";
import "rsuite/dist/rsuite.min.css";

config.autoAddCss = false;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomProvider>
        <App />
      </CustomProvider>
    </Provider>
  </React.StrictMode>
);
