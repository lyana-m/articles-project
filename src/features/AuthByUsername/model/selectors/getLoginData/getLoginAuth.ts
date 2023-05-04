import { type StoreSchema } from 'app/providers/StoreProvider/config/StoreSchema';

export const getLoginData = (store: StoreSchema) => store.login;
