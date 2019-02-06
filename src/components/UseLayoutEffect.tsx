import * as React from "react";
import { FC } from "react";
import { Horizon } from "./Horizon";
import { useForceUpdate } from "../utils";

const { useLayoutEffect, useRef, useState } = React;

export const UseLayoutEffectSample: FC<{}> = () => {
  const displayAreaRef = useRef(null);
  const renderCountRef = useRef(0);

  useLayoutEffect(() => {
    renderCountRef.current++;
    displayAreaRef.current.textContent = String(renderCountRef.current);
  });

  const forceUpdate = useForceUpdate();

  return (
    <div>
      <h2>useLayoutEffect sample</h2>
      <p>
        このコンポーネントは
        <b ref={displayAreaRef} />
        回描画されました。
      </p>
      <p>
        <button onClick={forceUpdate}>forceUpdate()</button>
      </p>
      <Horizon />
    </div>
  );
};
