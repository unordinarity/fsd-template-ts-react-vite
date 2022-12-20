import { list, variant } from '@effector/reflect';

import { Post } from '@/shared/types/post';

import * as Styles from './styles';
import { $postsList, $postsLoadingStatus, postClicked } from '../model';
import '../model/init';

type PostProps = {
  post: Post;
  postClicked: (payload: { postId: string }) => void;
};

const PostItem = ({ post, postClicked }: PostProps) => (
  <Styles.Post onClick={() => postClicked({ postId: post.id })}>
    <h1>{post.title}</h1>
    <Styles.Description>{post.description}</Styles.Description>
  </Styles.Post>
);

const Posts = list({
  view: PostItem,
  source: $postsList,
  bind: { postClicked },
  mapItem: { post: (post) => post },
  getKey: (post) => `${post.id}-${post.title}`,
});

const PostsField = variant({
  source: $postsLoadingStatus,
  cases: {
    pending: () => <h1>Loading...</h1>,
    done: Posts,
    fail: () => <h1>Something went wrong</h1>,
  },
});

export function PostsList() {
  return (
    <Styles.Wrapper>
      <Styles.Title>All Posts</Styles.Title>
      <PostsField />
    </Styles.Wrapper>
  );
}
