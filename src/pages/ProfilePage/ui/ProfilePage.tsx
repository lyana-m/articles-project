import { profileReducer } from 'entities/Profile';
import React from 'react';
import { AsyncReduser, useAsyncReducers } from 'shared/hooks/useAsyncReducers/useAsyncReducers';

const reducers: AsyncReduser[] = [{ reducerKey: 'profile', reducer: profileReducer }];

const ProfilePage = () => {
  useAsyncReducers(reducers);

  return <div>PROFILEPAGE</div>;
};

export default ProfilePage;
