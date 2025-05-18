import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LiffApp from "./components/LiffApp"
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LiffApp>
      <App />
    </LiffApp>
  </StrictMode>
);
