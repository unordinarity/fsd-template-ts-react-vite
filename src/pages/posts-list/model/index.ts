import { createStore } from 'effector';

import { Post } from '@/shared/types/post';

export const $postsList = createStore<Post[]>([]);
