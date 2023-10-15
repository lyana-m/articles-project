import type { PropsWithChildren } from 'react';
import cn from 'classnames';
import cls from './Loader.module.scss';

interface LoaderProps {
  className?: string;
}

const Loader = (props: PropsWithChildren<LoaderProps>) => {
  const { className } = props;

  return (
    <div className={cn(cls['lds-roller'], className)}>
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
