import { routes } from '@/shared/config/routing';

export function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => routes.postsList.open()}>Go to Posts</button>
    </>
  );
}
