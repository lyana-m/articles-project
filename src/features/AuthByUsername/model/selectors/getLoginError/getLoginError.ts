import { type StoreSchema } from '@/app/providers/StoreProvider';

export const getLoginError = (store: StoreSchema) => store.login?.error;
