import React, { useEffect } from 'react';
import { profileReducer, ProfileCard } from 'entities/Profile';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileLoading } from 'entities/Profile/model/selectors/getProfileLoading/getProfileLoading';
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData/fetchProfileData';
import { AsyncReduser, useAsyncReducers } from 'shared/hooks/useAsyncReducers/useAsyncReducers';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'shared/hooks/useAppSelector/useAppSelector';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

const reducers: AsyncReduser[] = [{ reducerKey: 'profile', reducer: profileReducer }];

const ProfilePage = () => {
  useAsyncReducers(reducers);

  const dispatch = useAppDispatch();

  const profileData = useAppSelector(getProfileData);
  const profileError = useAppSelector(getProfileError);
  const profileLoading = useAppSelector(getProfileLoading);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <div>
      <ProfilePageHeader />
      <ProfileCard data={profileData} isLoading={profileLoading} error={profileError} />
    </div>
  );
};

export default ProfilePage;
