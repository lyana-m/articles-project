import { type StoreSchema } from '@/app/providers/StoreProvider';

export const getLoginPassword = (store: StoreSchema) => store.login?.password;
