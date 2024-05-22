import React, { Suspense } from "react";
import App from "./App.jsx";
// import "./styles/tailwind.css";
import Loading from "./components/Loading.jsx";
import { hydrate } from "react-dom";
import { render } from "react-dom";

const rootElement = document.getElementById("root");
import "./styles/simple.css"
if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <Suspense fallback={<Loading />}>
        <App/>
      </Suspense>
    </React.StrictMode>,
    rootElement
  );
} else {
  render(
    <React.StrictMode>
      <Suspense fallback={<Loading />}>
        <App/>
      </Suspense>
    </React.StrictMode>,
    rootElement
  );
}
