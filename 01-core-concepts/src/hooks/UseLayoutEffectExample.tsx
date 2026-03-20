import React, { useRef, useLayoutEffect } from "react";

export const UseLayoutEffectExample = () => {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      console.log(ref.current.getBoundingClientRect());
    }
  }, []);

  return <div ref={ref}>Measure me!</div>;
};
