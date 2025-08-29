import { useState } from 'react';

export const Customhook = () => {
  const [count, incremet, decrement] = useCounter();
  return (
    <div>
      <h1>Custom hook</h1>
      <p>{count}</p>
      <button onClick={incremet}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

const useCounter = () => {
  const [count, setCount] = useState(0);
  function incremet() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return [count, incremet, decrement];
};
