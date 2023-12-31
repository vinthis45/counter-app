
import './App.css';
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="App">
      <h1>Counter </h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement} className="increment-btn">
        Increment
      </button>
      <button onClick={handleDecrement} className="decrement-btn">
        Decrement
      </button>
    </div>
  );
}

export default App;
