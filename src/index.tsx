import * as React from "react";
import { createRoot } from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import App from "./app";

const root = createRoot(document.getElementById("root"));
root.render(
  <MantineProvider>
    <App />
  </MantineProvider>
);
