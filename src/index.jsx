import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const Root = createRoot(document.getElementById("root"));
Root.render(
  <App />
);