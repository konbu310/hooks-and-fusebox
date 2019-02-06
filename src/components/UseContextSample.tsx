import * as React from "react";
import { FC } from "react";
import { Horizon } from "./Horizon";

const { useState, useContext, createContext } = React;

const MyContext = createContext(() => {});

export const UseContextSample: FC<{}> = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>useContext sample</h2>
      <p>
        <b>{count}</b>
      </p>
      <MyContext.Provider value={() => setCount(count => count + 1)}>
        <IncrementButton />
      </MyContext.Provider>
      <Horizon />
    </div>
  );
};

const IncrementButton: FC<{}> = () => {
  const incrementHandler = useContext(MyContext);

  return (
    <p>
      <button onClick={incrementHandler}>+</button>
    </p>
  );
};
