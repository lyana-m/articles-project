import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import cls from './ProfilePageHeader.module.scss';

const ProfilePageHeader = () => {
  const { t } = useTranslation('profile');

  return (
    <div className={cls.header}>
      <Text title={t('Профиль')} />
      <Button theme="outline">{t('Редактировать')}</Button>
    </div>
  );
};

export default ProfilePageHeader;
