import "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import { SWRConfig } from "swr"
import App from "./App";
import { fetcher } from "./utils/fetchers"

const swrConfig = {
  fetcher,
  revalidateOnFocus: false,
  revalidateIfStale: false,
}

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={swrConfig}>
      <App />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById("root")
);
