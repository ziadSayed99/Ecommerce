import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import { store } from "./store";
import App from "./App";
import { Provider } from "react-redux";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
