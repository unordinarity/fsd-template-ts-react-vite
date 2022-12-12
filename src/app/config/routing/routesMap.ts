import { lazy } from 'react';

import { postsLoadedRoute } from '@/pages/posts-list/model';

import { routes } from '@/shared/config/routing';

const PostsList = lazy(() => import('@/pages/posts-list'));

export const pathRoutes = [
  { route: routes.root, path: '/' },
  { route: routes.postsList, path: '/posts' },
];

export const viewRoutes = [{ route: postsLoadedRoute, view: PostsList }];
