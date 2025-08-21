import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Counter2, CounterProvider } from './context.jsx';
import { Reducer } from './usereducer.jsx';
import { WindowResize } from './window.jsx';

const Parent = React.lazy(() => import('./react2.jsx'));
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/react2',
    element: <Parent />,
  },
  {
    path: '/context',
    element: (
      <CounterProvider>
        <Counter2 />
      </CounterProvider>
    ),
  },
  {
    path: '/reducer',
    element: <Reducer />,
  },
  {
    path: '/window',
    element: <WindowResize />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
);
