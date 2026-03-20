import React, { useState, type ChangeEvent, type SyntheticEvent } from "react";

export const Events: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [log, setLog] = useState<string>("");

  const handleClick = () => setLog("Button clicked!");
  const handleMouseEnter = () => setLog("Mouse entered box!");
  const handleMouseLeave = () => setLog("Mouse left box!");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLog(`Form submitted with value: "${inputValue}"`);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setLog("Enter key pressed!");
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) =>
    setLog("Input focused!");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) =>
    setLog("Text copied from input!");

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Event Demo</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onCopy={handleCopy}
          placeholder="Type something..."
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <button type="submit">Submit</button>
      </form>

      <button onClick={handleClick} style={{ marginTop: "10px" }}>
        Click Me
      </button>

      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          marginTop: "10px",
          width: "200px",
          height: "100px",
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          userSelect: "none",
        }}
      >
        Hover over me
      </div>

      {log && (
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            border: "1px solid #ccc",
            backgroundColor: "#f9f9f9",
          }}
        >
          {log}
        </div>
      )}
    </div>
  );
};
