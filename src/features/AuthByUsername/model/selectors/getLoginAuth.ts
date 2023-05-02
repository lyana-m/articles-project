import { type StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';

export const getLoginAuth = (store: StoreSchema) => store.login;
