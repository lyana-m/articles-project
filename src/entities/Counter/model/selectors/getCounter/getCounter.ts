import { type StoreSchema } from '@/app/providers/StoreProvider/config/StoreSchema';

export const getCounter = (store: StoreSchema) => store.counter;
