import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { Button } from '@/shared/ui/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

const PageError = (props: PropsWithChildren<PageErrorProps>) => {
  const { className } = props;
  const { t } = useTranslation();

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className={cn(cls.PageError, className)}>
      <div className={cls.message}>{t('Что-то пошло не так')}</div>
      <Button onClick={reload}>{t('Обновить')}</Button>
    </div>
  );
};
export default PageError;
