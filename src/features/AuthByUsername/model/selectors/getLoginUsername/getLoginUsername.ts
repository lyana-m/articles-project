import { type StoreSchema } from 'app/providers/StoreProvider';

export const getLoginUsername = (store: StoreSchema) => store.login?.username;
