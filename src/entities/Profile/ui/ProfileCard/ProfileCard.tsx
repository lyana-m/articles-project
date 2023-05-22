import React from 'react';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import { Loader } from 'shared/ui/Loader';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Profile } from '../../model/types/profile';

interface ProdileCardProps {
  data?: Profile | null;
  isLoading?: boolean;
  error?: string;
}

const ProfileCard = (props: ProdileCardProps) => {
  const { data, isLoading, error } = props;

  const { t } = useTranslation('profile');

  console.log(isLoading);

  if (isLoading) {
    return (
      <div className={classNames(cls['profile-card'], {}, [cls.loading])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(cls['profile-card'], {}, [cls.error])}>
        <Text theme="error" align='center' title="Произошла ошибка при загрузке данных" text="Попробуйте перезагрузить страницу" />
      </div>
    );
  }

  return (
    <div className={cls['profile-card']}>
      <Input label={t('Имя')} value={data?.firstname} className={cls.input} />
      <Input label={t('Фамилия')} value={data?.lastname} className={cls.input} />
    </div>
  );
};

export default ProfileCard;
