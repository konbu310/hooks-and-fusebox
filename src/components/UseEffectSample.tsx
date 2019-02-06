import * as React from "react";
import { FC } from "react";
import { Horizon } from "./Horizon";

const { useState, useEffect } = React;

// Like ComponentDidMout()
export const UseEffectSample: FC<{}> = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCount(count => count + 1);
    }, 1000);
    return () => clearTimeout(timerId);
  }, [count]);

  return (
    <div>
      <h2>useEffect sample</h2>
      <p>
        time: <b>{count}</b>
      </p>
      <Horizon />
    </div>
  );
};
