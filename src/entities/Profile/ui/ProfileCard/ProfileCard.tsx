import React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { Input } from 'shared/ui/Input';
import { Text } from 'shared/ui/Text';
import { Loader } from 'shared/ui/Loader';
import { Avatar } from 'shared/ui/Avatar';
import { validateNumber } from 'shared/lib/validation/validateNumber/validateNumber';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';
import { Profile } from '../../model/types/profile';

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
  onCurrencyChange?: (value: Currency) => void;
  onCountryChange?: (value: Country) => void;
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
    onCurrencyChange,
    onCountryChange,
  } = props;

  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={cn(cls['profile-card'], cls.loading)}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn(cls['profile-card'], cls.error)}>
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
    <div className={cls['profile-card']}>
      {data?.avatar ? (
        <div className={cls['avatar-wrapper']}>
          <Avatar src={data.avatar} />
        </div>
      ) : null}
      <Input
        label={t('Имя')}
        value={data?.firstname}
        className={cls.input}
        readonly={readonly}
        onChange={onFirstnameChange}
      />
      <Input
        label={t('Фамилия')}
        value={data?.lastname}
        className={cls.input}
        readonly={readonly}
        onChange={onLastnameChange}
      />
      <Input
        label={t('Возраст')}
        value={data?.age}
        className={cls.input}
        readonly={readonly}
        onChange={onAgeChange}
        onKeyDown={validateNumber}
      />
      <Input label={t('Город')} value={data?.city} className={cls.input} readonly={readonly} onChange={onCityChange} />
      <Input
        label={t('Логин')}
        value={data?.username}
        className={cls.input}
        readonly={readonly}
        onChange={onUsernameChange}
      />
      <Input
        label={t('Аватар')}
        value={data?.avatar}
        className={cls.input}
        readonly={readonly}
        onChange={onAvatarChange}
      />
      <CurrencySelect value={data?.currency} className={cls.select} onChange={onCurrencyChange} readonly={readonly} />
      <CountrySelect value={data?.country} className={cls.select} onChange={onCountryChange} readonly={readonly} />
    </div>
  );
};

export default ProfileCard;
