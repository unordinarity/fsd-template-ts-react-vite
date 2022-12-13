import { lazy } from 'react';

import { routes } from '@/shared/config/routing';

const PostsListPage = lazy(() => import('@/pages/posts-list'));

export const pathRoutes = [
  { route: routes.root, path: '/' },
  { route: routes.postsList, path: '/posts' },
];

export const viewRoutes = [
  { route: routes.postsList, view: PostsListPage },
];
