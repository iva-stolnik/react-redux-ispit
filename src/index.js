import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { reducer } from "./redux/reducer";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
