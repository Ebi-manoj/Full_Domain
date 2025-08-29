import { RouterProvider } from 'react-router-dom';

import { appRouter } from './routing';

function App() {
  return <RouterProvider router={appRouter}></RouterProvider>;
}

export default App;
