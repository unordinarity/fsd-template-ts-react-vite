import { lazy } from 'react';

import { routes } from '@/shared/config/routing';

const PostsList = lazy(() => import('@/pages/posts-list'));

export const routesMap = [
  { route: routes.root, path: '/', view: () => null },
  { route: routes.postsList, path: '/posts', view: PostsList },
];
