import React, { useMemo, useState } from 'react';

function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(true);
  console.log('Parent rendered');
  const findValue = () => {
    for (let i = 0; i < 1000000000; i++) {}
  };
  useMemo(() => findValue(), [count]);
  return (
    <div>
      <h1>This is Parent</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
      <button onClick={() => setText(!text)}>text</button>
      <Child />
    </div>
  );
}
const Child = React.memo(() => {
  console.log('Child rendered');
  return (
    <div>
      <h1>I am Child</h1>
    </div>
  );
});
export default Parent;
// const Child = () => {
//   console.log('Child rendered');
//   return (
//     <div>
//       <h1>I am Child</h1>
//     </div>
//   );
// };
