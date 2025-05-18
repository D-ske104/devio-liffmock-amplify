import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { liffInit } from './lib/liff-init'

await liffInit()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
