import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Redux
import { store } from "./store";
import { Provider } from "react-redux";

// Router
// I am aware of the new `createBrowserRouter` and data API introduced in 6.4+
// but implementation with RTK Query requires a different approach that slow me down.
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
