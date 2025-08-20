import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Parent } from './react2.jsx';
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/react2',
    element: <Parent />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
);
