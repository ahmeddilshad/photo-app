import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import "./index.css";
import reducers from "./reducers/index";
import * as serviceWorker from "./serviceWorker";
import DashBoard from "./containers/dashboard";

let store = {};
if (process.env.NODE_ENV === "development") {
  store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
} else {
  store = createStore(reducers, applyMiddleware(thunk));
}

ReactDOM.render(
  <Provider store={store}>
    <DashBoard />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
