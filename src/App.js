import React, { useState } from "react";
function SimpleCalculator() {
  const [input, setInput] = useState("");
  const handleClick = (value) => {
    setInput(input + value);
  };
  const handleClear = () => {
    setInput("");
  };
  const handleEqual = () => {
    setInput(eval(input).toString());
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Simple Calculator</h2>
      <input type="text" value={input} readOnly style={{ width: "150px", textAlign: "right" }} />
      <div>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>
      <div>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
      </div>
      <div>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
      </div>
      <div>
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={handleEqual}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </div>
  );
}
export default SimpleCalculator;
