import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import GlobalStyles from "./styles/globalStyles";

ReactDOM.render(
  <>
    <Routes />
    <GlobalStyles />
  </>,
  document.getElementById("root")
);
