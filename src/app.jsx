import * as React from "react";
import { Form } from "./components/form";
import { List } from "./components/list";
import { Results } from "./components/results";
import "./index.scss";
import { GlobalProvider } from "./context/GlobalState";

export const App = () => (
  <div className="root">
    <GlobalProvider>
      <List />
      <Results />
      <Form />
    </GlobalProvider>
  </div>
);
