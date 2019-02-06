import * as React from "react";
import * as ReactDOM from "react-dom";
import { UseStateSample } from "./components/UseStateSample";
import { UseEffectSample } from "./components/UseEffectSample";
import { UseContextSample } from "./components/UseContextSample";
import { UseReducerSample } from "./components/UseReducerSample";
import { UseMemoSample } from "./components/UseMemoSample";

ReactDOM.render(
  <div>
    <UseStateSample />
    <UseEffectSample />
    <UseContextSample />
    <UseReducerSample />
    <UseMemoSample n={100} />
  </div>,
  document.getElementById("root")
);
