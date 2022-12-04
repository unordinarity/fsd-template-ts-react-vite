import { routes } from '@/shared/config/routing'
import { lazy } from 'react'

const PostsList = lazy(() => import('@/pages/posts-list'))

export const routesMap = [
  { route: routes.postsList, path: '/posts', view: PostsList },
  { route: routes.root, path: '/', view: () => null },
]
