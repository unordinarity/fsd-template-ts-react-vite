import { useUnit } from 'effector-react';

import classnames, {
  alignItems,
  display,
  fontSize,
  fontWeight,
  justifyContent,
  padding,
} from '@/shared/config/classnames/tailwind';

import './model';
import { $isPostsListLoading, $postsList } from './model';

const wrapper = classnames(
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center'),
);

const title = classnames(padding('p-10'), fontSize('text-6xl'), fontWeight('font-bold'));

export default function PostsList() {
  const [isLoading, postsList] = useUnit([$isPostsListLoading, $postsList]);

  return (
    <div className={wrapper}>
      <p className={title}>All Posts</p>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {postsList.map((post) => (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
