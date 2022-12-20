import { createRoute } from 'atomic-router';

export const routes = {
  root: createRoute(),
  postsList: createRoute(),
  post: createRoute<{ postId: string }>(),
};
