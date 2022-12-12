import { sample } from 'effector';

import { $postsList, getPostsListFx, loadPostsListViewFx } from '.';

sample({
  clock: loadPostsListViewFx.done,
  target: getPostsListFx,
});

sample({
  clock: getPostsListFx.doneData,
  target: $postsList,
});
