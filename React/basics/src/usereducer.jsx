import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action) {
    case 'inc':
      return (state = { count: state.count + 1 });
    case 'dec':
      return (state = { count: state.count - 1 });
  }
};

export const Reducer = () => {
  const [count, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h1>{count.count}</h1>
      <button onClick={() => dispatch('inc')}>Inc</button>
      <button onClick={() => dispatch('dec')}>Dec</button>
    </div>
  );
};
