import * as React from "react";
import { FC } from "react";
import { Horizon } from "./Horizon";

const { useState, useContext, useCallback, createContext } = React;

const MyContext = createContext(() => {});

export const UseCallbackSample: FC<{}> = () => {
  const [count, setCount] = useState(0);

  const updateCount = useCallback(() => setCount(count => count + 1), []);

  return (
    <div>
      <h2>useCallback sample</h2>
      <p>
        <b>{count}</b>
      </p>
      <MyContext.Provider value={updateCount}>
        <IncrementButton />
      </MyContext.Provider>
      <Horizon />
    </div>
  );
};

const IncrementButton: FC<{}> = React.memo(() => {
  const IncrementHandler = useContext(MyContext);

  return (
    <p>
      <button onClick={IncrementHandler}>+</button>
    </p>
  );
});
