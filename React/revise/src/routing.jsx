import { createBrowserRouter, Outlet } from 'react-router-dom';
import App from './App';
import { APIcomponent } from './API';
import Counter from './classComponet';
import { ContextComponent } from './Context';
import { Errorsimulation } from './ErrorBoundary';
import { Functional } from './functional';
import { ParentComponent } from './HigherComponent';
import { WrapperComponent } from './optimization';
import { Portals } from './portals';
import { TODO } from './useReducer';
import { Customhook } from './customHook';

const Layout = () => {
  return (
    <div>
      <h1>Namaste React</h1>
      {/* <Counter name="Ajith" /> */}
      {/* <Functional /> */}
      {/* <Portals /> */}
      {/* <Errorsimulation /> */}
      {/* <ParentComponent /> */}
      {/* <ContextComponent /> */}
      {/* <APIcomponent /> */}
      {/* <TODO /> */}
      {/* <WrapperComponent /> */}
      <Customhook />
    </div>
  );
};

const OutletLayout = () => {
  return (
    <>
      <Functional />
      <Outlet />
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  },
  {
    path: '/todo',
    element: <TODO />,
  },
  {
    path: '/outlet',
    element: <OutletLayout />,
    children: [
      {
        path: '/outlet/child-outlet',
        element: <ContextComponent />,
      },
    ],
  },
]);
