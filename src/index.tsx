import * as React from "react";
import * as ReactDOM from "react-dom";
import { UseStateSample } from "./components/UseStateSample";
import { UseEffectSample } from "./components/UseEffectSample";
import { UseContextSample } from "./components/UseContextSample";
import { UseReducerSample } from "./components/UseReducerSample";
import { UseMemoSample } from "./components/UseMemoSample";
import { UseCallbackSample } from "./components/UseCallbackSample";
import { UseRefSample } from "./components/UseRefSample";
import { UseLayoutEffectSample } from "./components/UseLayoutEffect";
import { UseDebugValueSample } from "./components/UseDebugValue";

ReactDOM.render(
  <div>
    <UseStateSample />
    <UseEffectSample />
    <UseContextSample />
    <UseReducerSample />
    <UseMemoSample n={100} />
    <UseCallbackSample />
    <UseRefSample />
    <UseLayoutEffectSample />
    <UseDebugValueSample />
  </div>,
  document.getElementById("root")
);
