// == import react
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// == import styles
import "semantic-ui-css/semantic.min.css";
import "./index.scss";

// == import components
import App from "./components/App/App";

// == import store
// import store from './store/store';
import configureStore from "./store/store";
const { store, persistor } = configureStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
