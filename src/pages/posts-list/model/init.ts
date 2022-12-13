import { sample } from 'effector';

import { routes } from '@/shared/config/routing';

import { $postsList, getPostsListFx, modelLoaded } from '.';

sample({
  clock: [modelLoaded, routes.postsList.opened],
  target: getPostsListFx,
});

sample({
  clock: getPostsListFx.doneData,
  target: $postsList,
});

modelLoaded();
