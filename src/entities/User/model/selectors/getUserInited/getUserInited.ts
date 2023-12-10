import { type StoreSchema } from '@/app/providers/StoreProvider/config/StoreSchema';

export const getUserInited = (state: StoreSchema) => state.user._inited;
