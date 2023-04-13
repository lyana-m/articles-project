import type { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

const PageLoader = (props: PropsWithChildren<PageLoaderProps>) => {
  const { className } = props;

  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader className={cls.loader} />
    </div>
  );
};
export default PageLoader;
