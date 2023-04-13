import type { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

const Loader = (props: PropsWithChildren<LoaderProps>) => {
  const { className } = props;

  return (
    <div className={classNames(cls['lds-roller'], {}, [className])}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default Loader;
