import { useUnit } from 'effector-react';

import * as styles from './styles';
import { $isPostsListLoading, $postsList } from '../model';
import '../model/init';

export function PostsList() {
  const [isLoading, postsList] = useUnit([$isPostsListLoading, $postsList]);

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>All Posts</p>

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.postsWrapper}>
          {postsList.map((post) => (
            <div key={post.id} className={styles.post}>
              <h1>{post.title}</h1>
              <p className={styles.description}>{post.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
