import { useEffect, useRef, useState } from 'react';

export const Functional = () => {
  return (
    <div>
      <h1>Functional Components</h1>
      <Stopwatch />
    </div>
  );
};

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>count+</button>
      <button onClick={() => setCount(count - 1)}>count-</button>
    </div>
  );
};

export const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef();
  function startTimer() {
    timerRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  }

  useEffect(() => {
    startTimer();

    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (count == 10) {
      clearInterval(timerRef.current);
    }
  }, [count]);

  return (
    <div>
      <h1>Count:{count}</h1>
    </div>
  );
};
