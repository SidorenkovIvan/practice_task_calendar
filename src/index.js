import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./PageLogin/Store/AuthContext";
import store from "./PageLogin/Store/Redux";

// TODO: let's name branches from the lowercase
// pay attention on bugs(with routing)
// it's good practice to separate imports (general libs and our)

ReactDOM.render(
  <React.StrictMode>
      {/* maybe better use one style for context? And it confuse -- it isn't clear what the store we have */}
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
