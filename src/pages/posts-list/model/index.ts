import { createEffect, createEvent, createStore } from 'effector';
import { status } from 'patronum';

import { PostsApi } from '@/shared/api/posts';
import { Post } from '@/shared/types/post';

export const modelLoaded = createEvent();
export const postClicked = createEvent<{ postId: string }>();

export const $postsList = createStore<Post[]>([]);

export const getPostsListFx = createEffect(PostsApi.getPostsList);

export const $postsLoadingStatus = status({ effect: getPostsListFx });
