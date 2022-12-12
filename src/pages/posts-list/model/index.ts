import { createEffect, createStore } from 'effector';

import { PostsApi } from '@/shared/api/posts';
import { Post } from '@/shared/types/post';

export const $postsList = createStore<Post[]>([]);

export const loadPostsListViewFx = createEffect(() => import('../ui'));
export const getPostsListFx = createEffect(PostsApi.getPostsList);

export const $isPostsListLoading = getPostsListFx.pending;
