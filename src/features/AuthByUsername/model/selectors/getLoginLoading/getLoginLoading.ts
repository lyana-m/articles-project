import { type StoreSchema } from '@/app/providers/StoreProvider';

export const getLoginLoading = (store: StoreSchema) => store.login?.isLoading;
