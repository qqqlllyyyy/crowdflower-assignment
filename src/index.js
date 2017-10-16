import "materialize-css/dist/css/materialize.min.css";
import "./styles/style.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

// New instance of Redux Store
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// Render root component
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
