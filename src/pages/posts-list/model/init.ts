import { sample } from 'effector';
import { debug } from 'patronum';

import { routes } from '@/shared/config/routing';

import { $postsList, getPostsListFx } from '.';

sample({
  clock: routes.postsList.opened,
  fn: () => {},
  target: getPostsListFx,
});

sample({
  clock: getPostsListFx.doneData,
  target: $postsList,
});

debug(routes.postsList.opened);
