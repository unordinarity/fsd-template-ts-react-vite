import { redirect } from 'atomic-router';
import { sample } from 'effector';

import { routes } from '@/shared/config/routing';

import { $postsList, getPostsListFx, modelLoaded, postClicked } from '.';

sample({
  clock: [modelLoaded, routes.postsList.opened],
  target: getPostsListFx,
});

sample({
  clock: getPostsListFx.doneData,
  target: $postsList,
});

redirect({
  clock: postClicked,
  params: ({ id: postId }) => ({ postId }),
  route: routes.post,
});

modelLoaded();
