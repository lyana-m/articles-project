import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector/useAppSelector';
import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidationErrors } from '../../model/selectors/getProfileValidationErrors/getProfileValidationErrors';
import { ValidationErrors } from '../../model/types/validationErrors';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { Text } from '@/shared/ui/Text';
import { ProfileCard } from '@/entities/Profile';
import EditableProfileCardHeader from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { AsyncReduser, useAsyncReducers } from '@/shared/hooks/useAsyncReducers/useAsyncReducers';

interface EditableProfileCardProps {
  id: string;
  className?: string;
}

const reducers: AsyncReduser[] = [{ reducerKey: 'profile', reducer: profileReducer }];

const EditableProfileCard = (props: EditableProfileCardProps) => {
  const { id, className } = props;

  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();

  const profileData = useAppSelector(getProfileFormData);
  const profileError = useAppSelector(getProfileError);
  const profileLoading = useAppSelector(getProfileLoading);
  const readonly = useAppSelector(getProfileReadonly);
  const validationErrors = useAppSelector(getProfileValidationErrors);

  const humanReadableErrors = {
    [ValidationErrors.NO_DATA]: t('Нет данных'),
    [ValidationErrors.ICRORRECT_FIRSTNAME]: t('Некорректное имя'),
    [ValidationErrors.ICRORRECT_LASTTNAME]: t('Некорректная фамилия'),
    [ValidationErrors.ICRORRECT_AGE]: t('Некорректный возраст'),
    [ValidationErrors.SERVER_ERROR]: t('Ошибка при сохранении данных'),
  };

  const handleFirstnameChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateFormData({ firstname: value }));
    },
    [dispatch]
  );

  const handleLastnameChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateFormData({ lastname: value }));
    },
    [dispatch]
  );

  const handleAgeChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateFormData({ age: Number(value) || undefined }));
    },
    [dispatch]
  );

  const handleCityChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateFormData({ city: value }));
    },
    [dispatch]
  );

  const handleUsernameChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateFormData({ username: value }));
    },
    [dispatch]
  );

  const handleAvatarChange = useCallback(
    (value: string) => {
      dispatch(profileActions.updateFormData({ avatar: value }));
    },
    [dispatch]
  );

  const handleCurrencyChange = useCallback(
    (value: Currency) => {
      dispatch(profileActions.updateFormData({ currency: value }));
    },
    [dispatch]
  );

  const handleCountryChange = useCallback(
    (value: Country) => {
      dispatch(profileActions.updateFormData({ country: value }));
    },
    [dispatch]
  );

  useAsyncReducers(reducers);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook' && id) {
      dispatch(fetchProfileData(id));
    }
  }, [dispatch, id]);

  return (
    <div className={className}>
      <EditableProfileCardHeader />
      {validationErrors?.map((error) => (
        <Text key={error} text={humanReadableErrors[error]} theme="error" />
      ))}
      <ProfileCard
        data={profileData}
        isLoading={profileLoading}
        error={profileError}
        readonly={readonly}
        onFirstnameChange={handleFirstnameChange}
        onLastnameChange={handleLastnameChange}
        onAgeChange={handleAgeChange}
        onCityChange={handleCityChange}
        onUsernameChange={handleUsernameChange}
        onAvatarChange={handleAvatarChange}
        onCurrencyChange={handleCurrencyChange}
        onCountryChange={handleCountryChange}
      />
    </div>
  );
};

export default EditableProfileCard;
