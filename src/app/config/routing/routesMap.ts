import { lazy } from 'react';

import { routes } from '@/shared/config/routing';

const PostsListPage = lazy(() => import('@/pages/posts-list'));
const PostPage = lazy(() => import('@/pages/post'));

export const pathRoutes = [
  { route: routes.root, path: '/' },
  { route: routes.postsList, path: '/posts-list' },
  { route: routes.post, path: '/post/:postId' },
];

export const viewRoutes = [
  { route: routes.postsList, view: PostsListPage },
  { route: routes.post, view: PostPage },
];
