import classnames, { height, width } from '@/shared/config/classnames/tailwind'
import { RouterProvider } from 'atomic-router-react'
import { router } from './config/routing/init'
import { RoutesView } from './config/routing/RoutesView'

const appClass = classnames(width('w-screen'), height('h-screen'))

export const App = () => {
  return (
    <div className={appClass}>
      <RouterProvider router={router}>
        <RoutesView />
      </RouterProvider>
    </div>
  )
}
