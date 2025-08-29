import { useCallback } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import React from 'react';

export const WrapperComponent = () => {
  return (
    <div>
      <h1>Ways of optimization</h1>
      <ParentComponent />
    </div>
  );
};

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  console.log('.......Parent rendered.........');
  const [random, setRandom] = useState(0);
  const memoized = useCallback(() => {
    function xyz() {}
  }, []);

  useMemo(
    function longTask() {
      for (let i = 0; i < 1000000000; i++) {}
    },
    [random]
  );

  return (
    <div>
      <h1>I am Parent component</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
      {/* <button onClick={() => setRandom(random + 1)}>Click</button> */}
      <ChildComponent count={memoized} />
    </div>
  );
};
const ChildComponent = React.memo(({ count }) => {
  console.log('.......Child rendered.........');
  return (
    <div>
      <h1>I am Child component</h1>
    </div>
  );
});
// const ChildComponent = () => {
//   console.log('.......Child rendered.........');
//   return (
//     <div>
//       <h1>I am Child component</h1>
//     </div>
//   );
// };
