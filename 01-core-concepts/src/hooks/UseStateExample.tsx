import React, { useState } from "react";

export const UseStateExample = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <button onClick={() => setCount((prev) => prev + 1)}>Count: {count}</button>
  );
};
