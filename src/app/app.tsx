import { RouterProvider } from 'atomic-router-react';

import classnames, { height, width } from '@/shared/config/classnames/tailwind';

import { router, RoutesView } from './config/routing/init';

const appClass = classnames(width('w-screen'), height('h-screen'));

export const App = () => {
  return (
    <div className={appClass}>
      <RouterProvider router={router}>
        <RoutesView />
      </RouterProvider>
    </div>
  );
};
