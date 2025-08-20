import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
const persons = [
  { name: 'Ebi', email: 'ebimanoj28@gmail.com' },
  { name: 'Nidhi', email: 'nidhimm@gmail.com' },
];

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Stopwatch />
    </div>
  );
}

////////////////////////////////////////
//1)

const Profile = ({ name, email }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

////////////////////////////////////////
//2) Increment or decrement
const Counter = () => {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      setisLoading(true);
      setError('');
      try {
        const user = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${count}`
        );
        setUser({ ...user?.data });
      } catch (error) {
        console.log(error);
        setError('No user found');
      } finally {
        setisLoading(false);
      }
    };
    fetchUser();
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
      {!error && (
        <>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <Profile name={user.name} email={user.email} />
          )}
        </>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};
///////////////////////////////////////////////////////////////
/////Form element
export const Input = () => {
  const inputRef = useRef();
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={() => console.log(inputRef.current.value)}>click</button>
    </div>
  );
};

///////////////////////////////////////////////////////
///STOPWATCH
const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  function handleStart() {
    timerRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  }
  function handleStop() {
    clearInterval(timerRef.current);
  }

  function clear() {
    handleStop();
    setCount(0);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={clear}>clear</button>
    </div>
  );
};
export default App;
