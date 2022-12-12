import { createRoutesView, RouterProvider } from 'atomic-router-react';

import classnames, { height, width } from '@/shared/config/classnames/tailwind';

import { router } from './config/routing/init';
import { viewRoutes } from './config/routing/routesMap';

const appClass = classnames(width('w-screen'), height('h-screen'));

const RoutesView = createRoutesView({ routes: viewRoutes });

export function App() {
  return (
    <div className={appClass}>
      <RouterProvider router={router}>
        <RoutesView />
      </RouterProvider>
    </div>
  );
}
