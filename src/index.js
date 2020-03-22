import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import App from "./App";
import { Provider } from "react-redux";

import { fetchAuthors, fetchBooks } from "./redux/actions";
import store from "./redux";
store.dispatch(fetchAuthors());
store.dispatch(fetchBooks());
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
