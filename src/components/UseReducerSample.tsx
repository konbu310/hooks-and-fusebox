import * as React from "react";
import { FC } from "react";
import { Horizon } from "./Horizon";

const { useContext, useReducer, createContext } = React;

const DispatchContext = createContext((action: string) => {});

const reducer = (
  { year, month }: { year: number; month: number },
  action: string
) => {
  switch (action) {
    case "increment":
      return month === 11
        ? { year: year + 1, month: 0 }
        : { year, month: month + 1 };
    case "decrement":
      return month === 0
        ? { year: year - 1, month: 11 }
        : { year, month: month - 1 };
  }
};

export const UseReducerSample = () => {
  const [state, dispatch] = useReducer(reducer, {
    year: 0,
    month: 1
  });

  return (
    <div>
      <h2>useReducer sample</h2>
      <p>
        <b>
          {state.year}年 {state.month}ヶ月
        </b>
      </p>
      <DispatchContext.Provider value={dispatch}>
        <ContorolButtons />
      </DispatchContext.Provider>
      <Horizon />
    </div>
  );
};

const ContorolButtons: FC<{}> = () => {
  const dispatch = useContext(DispatchContext);

  return (
    <p>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("increment")}>+</button>
    </p>
  );
};
