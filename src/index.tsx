import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from 'react-redux';
import store from "./../store/store";


const rootElement = document.getElementById("root") as HTMLElement
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>
);
