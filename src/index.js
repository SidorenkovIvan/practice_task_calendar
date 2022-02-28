import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./PageLogin/Store/AuthContext";
import store from "./PageLogin/Store/Redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <AuthContextProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
