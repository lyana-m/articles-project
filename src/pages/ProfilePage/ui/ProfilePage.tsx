import React, { useEffect } from 'react';
import { profileReducer, ProfileCard } from 'entities/Profile';
import { AsyncReduser, useAsyncReducers } from 'shared/hooks/useAsyncReducers/useAsyncReducers';
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch';
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData/fetchProfileData';

const reducers: AsyncReduser[] = [{ reducerKey: 'profile', reducer: profileReducer }];

const ProfilePage = () => {
  useAsyncReducers(reducers);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  });

  return <div><ProfileCard /></div>;
};

export default ProfilePage;
