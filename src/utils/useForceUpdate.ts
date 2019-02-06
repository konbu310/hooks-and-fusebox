import { useState } from "react";

export const useForceUpdate = () => {
  const [value, set] = useState(true);
  return () => set(!value);
};
