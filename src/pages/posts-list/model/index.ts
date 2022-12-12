import { chainRoute } from 'atomic-router';
import { createEffect, createStore } from 'effector';

import { PostsApi } from '@/shared/api/posts';
import { routes } from '@/shared/config/routing';
import { Post } from '@/shared/types/post';

export const $postsList = createStore<Post[]>([]);

export const getPostsListFx = createEffect(PostsApi.getPostsList);

export const $isPostsListLoading = getPostsListFx.pending;

export const postsLoadedRoute = chainRoute({
  route: routes.postsList,
  beforeOpen: {
    mapParams: () => {},
    effect: getPostsListFx,
  },
});
