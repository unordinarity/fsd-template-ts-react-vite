import { PostsList } from '@/pages/posts-list';

import { routes } from '@/shared/config/routing';

export const pathRoutes = [
  { route: routes.root, path: '/' },
  { route: routes.postsList, path: '/posts' },
];

export const viewRoutes = [{ route: routes.postsList, view: PostsList }];
