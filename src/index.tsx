import * as React from "react";
import * as ReactDOM from "react-dom";
import { UseStateSample } from "./components/UseStateSample";
import { UseEffectSample } from "./components/UseEffectSample";
import { UseContextSample } from "./components/UseContextSample";

ReactDOM.render(
  <div>
    <UseStateSample />
    <UseEffectSample />
    <UseContextSample />
  </div>,
  document.getElementById("root")
);
