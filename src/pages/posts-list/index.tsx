import classnames, {
  alignItems,
  display,
  fontSize,
  fontWeight,
  justifyContent,
  padding,
} from '@/shared/config/classnames/tailwind';

import './model';

const wrapper = classnames(
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center'),
);

const title = classnames(padding('p-10'), fontSize('text-6xl'), fontWeight('font-bold'));

export default function PostsList() {
  return (
    <div className={wrapper}>
      <p className={title}>All Posts</p>

      <div></div>
    </div>
  );
}
