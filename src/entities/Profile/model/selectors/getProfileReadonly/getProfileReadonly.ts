import { StoreSchema } from 'app/providers/StoreProvider';

export const getProfileReadonly = (state: StoreSchema) => state.profile?.readonly;
