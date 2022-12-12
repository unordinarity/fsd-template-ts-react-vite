import { createHistoryRouter, redirect } from 'atomic-router';
import { createBrowserHistory } from 'history';

import { routes } from '@/shared/config/routing';

import { pathRoutes } from './routesMap';

export const router = createHistoryRouter({ routes: pathRoutes });

redirect({
  clock: [router.routeNotFound, routes.root.opened],
  route: routes.postsList,
});

router.setHistory(createBrowserHistory());
