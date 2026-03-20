import React, { useEffect, useState } from "react";

export const TimerDemo: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    // setTimeout: runs once after 2 seconds
    const timeoutId = setTimeout(() => {
      setMessage("This runs once after 2 seconds!");
      console.log("Timeout triggered");
    }, 2000);

    // setInterval: runs every second
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
      console.log("Interval triggered");
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h2>Timer Demo</h2>
      <p>{message}</p>
      <p>Interval count: {count}</p>
    </div>
  );
};
