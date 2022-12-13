import { createEffect, createEvent, createStore } from 'effector';

import { PostsApi } from '@/shared/api/posts';
import { Post } from '@/shared/types/post';

export const modelLoaded = createEvent();

export const $postsList = createStore<Post[]>([]);

export const getPostsListFx = createEffect(PostsApi.getPostsList);

export const $isPostsListLoading = getPostsListFx.pending;
