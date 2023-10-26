import { StoreSchema } from 'app/providers/StoreProvider';

export const getProfileLoading = (state: StoreSchema) => state.profile?.isLoading;
