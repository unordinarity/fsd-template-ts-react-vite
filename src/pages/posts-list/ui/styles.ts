import classnames, {
  alignItems,
  borderColor,
  borderRadius,
  borderWidth,
  cursor,
  display,
  flexDirection,
  fontSize,
  fontWeight,
  gap,
  justifyContent,
  padding,
  width,
} from '@/shared/config/classnames/tailwind';

export const wrapper = classnames(
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  flexDirection('flex-col'),
  gap('gap-20'),
);

export const title = classnames(
  padding('p-10'),
  fontSize('text-6xl'),
  fontWeight('font-bold'),
);

export const postsWrapper = classnames(
  width('w-full'),
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  flexDirection('flex-col'),
  gap('gap-10'),
);

export const post = classnames(
  width('w-1/3'),
  padding('p-6'),
  display('flex'),
  flexDirection('flex-col'),
  gap('gap-2'),
  fontSize('text-4xl'),
  fontWeight('font-medium'),
  borderRadius('rounded-xl'),
  borderColor('border-gray-500'),
  borderColor('hover:border-blue-500'),
  borderWidth('border-2'),
  borderWidth('hover:border-4'),
  cursor('hover:cursor-pointer'),
);

export const description = classnames(
  fontSize('text-2xl'),
  fontWeight('font-normal'),
);
