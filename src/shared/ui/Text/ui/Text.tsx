import type { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

type TextTheme = 'primary' | 'error';

interface TextProps {
  className?: string;
  text?: string;
  title?: string;
  theme?: TextTheme;
}

const Text = (props: PropsWithChildren<TextProps>) => {
  const { title, text, theme = 'primary', className } = props;

  return (
    <div className={classNames(cls.Text, { [cls[theme]]: !!theme }, [className])}>
      {title ? <p className={cls.title}>{title}</p> : null}
      {text ? <p className={cls.text}>{text}</p> : null}
    </div>
  );
};
export default Text;
