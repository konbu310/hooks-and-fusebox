import * as React from "react";
import * as ReactDOM from "react-dom";
import { UseStateSample } from "./components/UseStateSample";
import { UseEffectSample } from "./components/UseEffectSample";
import { UseContextSample } from "./components/UseContextSample";
import { UseReducerSample } from "./components/UseReducerSample";

ReactDOM.render(
  <div>
    <UseStateSample />
    <UseEffectSample />
    <UseContextSample />
    <UseReducerSample />
  </div>,
  document.getElementById("root")
);
