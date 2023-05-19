import React from 'react';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
// import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import { Input } from 'shared/ui/Input';
import { Button } from 'shared/ui/Button';
import { Text } from 'shared/ui/Text';
import { Loader } from 'shared/ui/Loader';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';

const ProfileCard = () => {
  const profileData = useAppSelector(getProfileData);
  // const profileError = useAppSelector(getProfileError);
  const profileLoading = useAppSelector(getProfileLoading);

  const { t } = useTranslation('profile');

  if (profileLoading) {
    return <Loader />;
  }

  return (
    <div className={cls['profile-card']}>
      <div className={cls.header}>
        <Text title={t('Профиль')} />
        <Button theme="outline">{t('Редактировать')}</Button>
      </div>
      <Input label={t('Имя')} value={profileData?.firstname} className={cls.input} />
      <Input label={t('Фамилия')} value={profileData?.lastname} className={cls.input} />
    </div>
  );
};

export default ProfileCard;
