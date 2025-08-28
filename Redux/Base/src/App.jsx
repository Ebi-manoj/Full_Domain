import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './store/counterSlice';

function App() {
  const count = useSelector(store => store.count);
  const dispatch = useDispatch();
  const timerRef = useRef();

  function startTimer() {
    timerRef.current = setInterval(() => {
      dispatch(increment());
    }, 1000);
  }

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);
  useEffect(() => {
    if (count == 10) clearInterval(timerRef.current);
    // return () => clearInterval(timerRef.current);
  }, [count]);

  return (
    <div>
      <h1>Hello</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>click</button>
    </div>
  );
}

export default App;
