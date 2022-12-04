import classnames, {
  alignItems,
  display,
  fontSize,
  justifyContent,
  padding,
} from '@/shared/config/classnames/tailwind'

const wrapper = classnames(
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  padding('p-20'),
  fontSize('text-5xl')
)

const PostsList = () => {
  return (
    <div className={wrapper}>
      <h1>Posts List</h1>
    </div>
  )
}

export default PostsList
