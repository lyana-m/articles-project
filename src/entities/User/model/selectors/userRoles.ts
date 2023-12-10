import { createSelector } from '@reduxjs/toolkit';
import { StoreSchema } from '@/app/providers/StoreProvider/config/StoreSchema';

export const getUserRoles = (state: StoreSchema) => state.user.authData?.roles;

export const isAdmin = createSelector(getUserRoles, (roles) => roles?.includes('ADMIN'));
export const isManager = createSelector(getUserRoles, (roles) => roles?.includes('MANAGER'));
export const isUser = createSelector(getUserRoles, (roles) => roles?.includes('USER'));
