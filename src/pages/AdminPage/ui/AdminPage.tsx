import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page';

const AdminPage = () => {
  const { t } = useTranslation('about');

  return <Page>{t('Админка')}</Page>;
};

export default AdminPage;
