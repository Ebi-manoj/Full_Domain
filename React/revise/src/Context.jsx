import React, { useContext, useState } from 'react';

export const ContextComponent = () => {
  return (
    <div>
      <ContextProvider>
        <SampleComponent />
      </ContextProvider>
    </div>
  );
};

const userContext = React.createContext();

const ContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <userContext.Provider value={{ count, setCount }}>
      {children}
    </userContext.Provider>
  );
};

const SampleComponent = () => {
  const { count, setCount } = useContext(userContext);
  return (
    <div>
      <h1>Content Sample</h1>
      <p>Count:{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};
