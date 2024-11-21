import { useState } from "react";

function expensiveCalculation(): number {
  console.log("Running expensive calculation...");
  return 1000;
}

export default function HeavyCalculations() {
  const [count, setCount] = useState(expensiveCalculation());

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
