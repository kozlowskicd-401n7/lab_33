import React from "react";
import ReactDOM from "react-dom";

import createStore from "./store";
import { Provider } from "react-redux";

import App from "./app.js";

const store = createStore();

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <App />
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
