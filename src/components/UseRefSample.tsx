import * as React from "react";
import { FC } from "react";
import { Horizon } from "./Horizon";

const { useEffect, useRef } = React;

export const UseRefSample: FC<{}> = () => {
  const displayAreaRef = useRef(null);

  useEffect(() => {
    let rafid: number;
    const loop = () => {
      // 現在時刻を表示
      const now = new Date();
      displayAreaRef.current.textContent = `
         ${String(now.getHours()).padStart(2, "0")}:
         ${String(now.getMinutes()).padStart(2, "0")}:
         ${String(now.getSeconds()).padStart(2, "0")}:
         ${String(now.getMilliseconds()).padStart(3, "0")}
      `;
      rafid = window.requestAnimationFrame(loop);
    };
    loop();
    return () => window.cancelAnimationFrame(rafid);
  });

  return (
    <div>
      <h2>useRef sample</h2>
      <p ref={displayAreaRef} />
      <Horizon />
    </div>
  );
};
