import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { Notifications } from "react-push-notification";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Notifications />
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  </React.StrictMode>
);
