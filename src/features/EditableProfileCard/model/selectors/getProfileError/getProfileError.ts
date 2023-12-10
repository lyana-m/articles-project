import { StoreSchema } from '@/app/providers/StoreProvider';

export const getProfileError = (state: StoreSchema) => state.profile?.error;
