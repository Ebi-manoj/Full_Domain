import { createContext, useContext, useState } from 'react';

const counterContext = createContext();

export function CounterProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <counterContext.Provider value={{ count, setCount }}>
      {children}
    </counterContext.Provider>
  );
}

export const Counter2 = () => {
  const { count, setCount } = useContext(counterContext);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>dec</button>
    </div>
  );
};
