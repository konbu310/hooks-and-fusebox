import * as React from "react";
import { FC } from "react";
import { Horizon } from "./Horizon";

const { useMemo } = React;

export const UseMemoSample: FC<{ n: number }> = ({ n }) => {
  const sum = useMemo(() => {
    let result = 0;
    for (let i = 1; i <= n; i++) {
      result += i;
    }
    return result;
  }, [n]);

  return (
    <div>
      <h2>useMemo Sample</h2>
      <p>
        1 + ... + {n} = <b>{sum}</b>
      </p>
      <Horizon />
    </div>
  );
};
