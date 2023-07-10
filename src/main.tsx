import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

const client =  new QueryClient()

import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
