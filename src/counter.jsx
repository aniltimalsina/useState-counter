import { useState } from "react";
import "./counter.css";
function Counter(prop) {
  const initialCount = prop.currentCount;
  const [count, setCount] = useState(initialCount);
  const handleIncrement = function () {
    return setCount(count + 1);
  };
  const handleDecrement = function () {
    if (count > 0) {
      return setCount(count - 1);
    }
  };
  return (
    <>
      <h1>Counter</h1>
      <div className="counter-card">
        <button onClick={() => handleIncrement()}>Increment</button>
        <div className="my-count">{count}</div>
        <button onClick={() => handleDecrement()}>Decrement</button>
      </div>
    </>
  );
}

export default Counter;
