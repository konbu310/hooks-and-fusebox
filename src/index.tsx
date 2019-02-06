import * as React from "react";
import * as ReactDOM from "react-dom";
import { UseStateSample } from "./components/UseStateSample";
import { UseEffectSample } from "./components/UseEffectSample";

ReactDOM.render(
  <div>
    <UseStateSample />
    <UseEffectSample />
  </div>,
  document.getElementById("root")
);
