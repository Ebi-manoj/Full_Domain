import { useEffect, useState } from 'react';

export function WindowResize() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    return () =>
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
  });

  return (
    <div>
      <h1>Width:{width}</h1>
    </div>
  );
}
