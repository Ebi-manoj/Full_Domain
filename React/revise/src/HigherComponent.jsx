import { useState } from 'react';

export const ParentComponent = () => {
  const ClickComponent = HigherOrderComponent(ClickCounter);
  const HoverComponent = HigherOrderComponent(HoverCounter);
  return (
    <div>
      <h1>Parent Component</h1>
      <ClickComponent />
      <HoverComponent />
    </div>
  );
};

export const HigherOrderComponent = Component => {
  return () => {
    const [count, setCount] = useState(0);

    function increment() {
      setCount(count + 1);
    }
    return (
      <>
        <Component count={count} increment={increment} />
      </>
    );
  };
};

export const ClickCounter = ({ count, increment }) => {
  return (
    <div>
      <h1>Clicker Counter:{count}</h1>
      <button onClick={increment}>Click</button>
    </div>
  );
};
export const HoverCounter = ({ count, increment }) => {
  return (
    <div>
      <h1>Hover Counter:{count}</h1>
      <button onMouseOver={increment}>Hover</button>
    </div>
  );
};
