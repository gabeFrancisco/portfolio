import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/tailwind.css";
import Loading from "./components/Loading.jsx";
import { hydrate } from "react-dom";
import { render } from "react-dom";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Blog from "./routes/Blog.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: []
  },
  {
    path: "/blog",
    element: <Blog/>,
  },
]);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </React.StrictMode>,
    rootElement
  );
} else {
  render(
    <React.StrictMode>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </React.StrictMode>,
    rootElement
  );
}
