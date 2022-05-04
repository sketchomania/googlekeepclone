import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { applyMiddleware, compose, createStore } from "redux";
// import thunk from "redux-thunk";

// import rootReducers from "./reducers";
import store from "./store";
import App from "./App";
import "./index.css";

// const store = createStore(rootReducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
