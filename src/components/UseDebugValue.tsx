import * as React from "react";
import { FC } from "react";
import { useForceUpdate } from "../utils";
import { Horizon } from "./Horizon";

const { useEffect, useRef, useDebugValue, useState } = React;

const useRenderCount = () => {
  const renderCountRef = useRef(0);

  useDebugValue(
    renderCountRef.current,
    count => `このコンポーネントは${count}回再描画されました。`
  );

  useEffect(() => {
    renderCountRef.current++;
  });
};

export const UseDebugValueSample: FC<{}> = () => {
  useRenderCount();

  const forceUpdate = useForceUpdate();

  return (
    <div>
      <h2>useDebugValue sample</h2>
      <p>このコンポーネントを開発者ツールで見ると再描画数が表示されます。</p>
      <p>
        <button onClick={forceUpdate}>forceUpdate()</button>
      </p>
      <Horizon />
    </div>
  );
};
