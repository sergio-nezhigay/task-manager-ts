import React from "react";
import { BrowserRouter } from "react-router-dom";

import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
} else {
  console.error("Root element with id 'root' not found.");
}
