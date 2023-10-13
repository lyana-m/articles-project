import { useTranslation } from 'react-i18next';
import cls from './NotFound.module.scss';
import { Page } from 'shared/ui/Page';

const NotFound = () => {
  const { t } = useTranslation();

  return <Page className={cls.NotFound}>{t('Страница не найдена')}</Page>;
};
export default NotFound;
