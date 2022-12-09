import { createHistoryRouter, redirect } from 'atomic-router';
import { createRoutesView } from 'atomic-router-react';
import { createBrowserHistory } from 'history';

import { routes } from '@/shared/config/routing';

import { routesMap } from './routesMap';

export const RoutesView = createRoutesView({ routes: routesMap });

export const router = createHistoryRouter({ routes: routesMap });

redirect({
  clock: [router.routeNotFound, routes.root.opened],
  route: routes.postsList,
});

router.setHistory(createBrowserHistory());
