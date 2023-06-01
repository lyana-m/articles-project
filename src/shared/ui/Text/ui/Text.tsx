import type { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

type TextTheme = 'primary' | 'error';
type TextAlign = 'left' | 'right' | 'center';
type TextSize = 'size-s' | 'size-m' | 'size-l';

interface TextProps {
  className?: string;
  text?: string;
  title?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

const Text = (props: PropsWithChildren<TextProps>) => {
  const { title, text, theme = 'primary', align = 'left', size = 'size-m', className } = props;

  return (
    <div className={classNames(cls.Text, { [cls[theme]]: !!theme }, [className, cls[align], cls[size]])}>
      {title ? <p className={cls.title}>{title}</p> : null}
      {text ? <p className={cls.text}>{text}</p> : null}
    </div>
  );
};
export default Text;
