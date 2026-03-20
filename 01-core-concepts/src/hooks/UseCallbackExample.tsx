import React, { useCallback } from "react";

export const UseCallbackExample = () => {
  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []);

  return <button onClick={handleClick}>Click Me</button>;
};
