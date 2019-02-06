import * as React from "react";
import { FC } from "react";
import { Horizon } from "./Horizon";

const { useState } = React;

export const UseStateSample: FC<{}> = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>useState sample</h2>
      <p>
        <button onClick={() => setCount(count - 1)}>-</button>
        <b>{"　" + count + "　"}</b>
        <button onClick={() => setCount(count + 1)}>+</button>
      </p>
      <Horizon />
    </div>
  );
};
