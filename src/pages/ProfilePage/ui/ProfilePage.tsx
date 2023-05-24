import React, { useCallback, useEffect } from 'react';
import { profileReducer, ProfileCard, getProfileReadonly, profileActions } from 'entities/Profile';
import { getProfileFormData } from 'entities/Profile/model/selectors/getProfileFormData/getProfileFormData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading';
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData/fetchProfileData';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { AsyncReduser, useAsyncReducers } from 'shared/hooks/useAsyncReducers/useAsyncReducers';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

const reducers: AsyncReduser[] = [{ reducerKey: 'profile', reducer: profileReducer }];

const ProfilePage = () => {
  useAsyncReducers(reducers);

  const dispatch = useAppDispatch();

  const profileData = useAppSelector(getProfileFormData);
  const profileError = useAppSelector(getProfileError);
  const profileLoading = useAppSelector(getProfileLoading);
  const readonly = useAppSelector(getProfileReadonly);

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
      if (/^\d+$/.test(value)) {
        dispatch(profileActions.updateFormData({ age: Number(value) }));
      }
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

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div>
      <ProfilePageHeader />
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

export default ProfilePage;
