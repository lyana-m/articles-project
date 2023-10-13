import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return <Page>{t('О нас')}</Page>;
};

export default AboutPage;
