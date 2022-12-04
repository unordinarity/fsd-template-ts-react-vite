import { routes } from '@/shared/config/routing'
import { createHistoryRouter, redirect } from 'atomic-router'
import { createBrowserHistory } from 'history'
import { routesMap } from './routesMap'

export const router = createHistoryRouter({ routes: routesMap })

redirect({
  clock: [router.routeNotFound, routes.root.opened, routes.root.updated],
  route: routes.postsList,
})

router.setHistory(createBrowserHistory())
