import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App.jsx";
import index from "./js/index.js";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//grabbing the App component from App.jsx and using a Provider component by looking a the store.