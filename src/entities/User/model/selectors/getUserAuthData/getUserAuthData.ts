import { type StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';

export const getUserAuthData = (state: StoreSchema) => state.user.authData;
