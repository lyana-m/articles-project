import React from 'react';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import { Loader } from 'shared/ui/Loader';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Profile } from '../../model/types/profile';
import Avatar from 'shared/ui/Avatar/Avatar';

interface ProdileCardProps {
  data?: Profile | null;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onFirstnameChange?: (value: string) => void;
  onLastnameChange?: (value: string) => void;
  onAgeChange?: (value: string) => void;
  onCityChange?: (value: string) => void;
  onUsernameChange?: (value: string) => void;
  onAvatarChange?: (value: string) => void;
}

const ProfileCard = (props: ProdileCardProps) => {
  const {
    data,
    isLoading,
    error,
    readonly,
    onFirstnameChange,
    onLastnameChange,
    onAgeChange,
    onCityChange,
    onUsernameChange,
    onAvatarChange,
  } = props;

  const { t } = useTranslation('profile');

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
        <Text
          theme="error"
          align="center"
          title="Произошла ошибка при загрузке данных"
          text="Попробуйте перезагрузить страницу"
        />
      </div>
    );
  }

  return (
    <div className={classNames(cls['profile-card'])}>
      {data?.avatar ? (
        <div className={cls['avatar-wrapper']}>
          <Avatar src={data.avatar} />
        </div>
      ) : null}
      <Input
        label={t('Имя')}
        value={data?.firstname}
        className={cls.input}
        readOnly={readonly}
        onChange={onFirstnameChange}
      />
      <Input
        label={t('Фамилия')}
        value={data?.lastname}
        className={cls.input}
        readOnly={readonly}
        onChange={onLastnameChange}
      />
      <Input label={t('Возраст')} value={data?.age} className={cls.input} readOnly={readonly} onChange={onAgeChange} />
      <Input label={t('Город')} value={data?.city} className={cls.input} readOnly={readonly} onChange={onCityChange} />
      <Input
        label={t('Логин')}
        value={data?.username}
        className={cls.input}
        readOnly={readonly}
        onChange={onUsernameChange}
      />
      <Input
        label={t('Аватар')}
        value={data?.avatar}
        className={cls.input}
        readOnly={readonly}
        onChange={onAvatarChange}
      />
    </div>
  );
};

export default ProfileCard;
