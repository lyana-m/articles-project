import { StoreSchema } from 'app/providers/StoreProvider';

export const getProfileValidationErrors = (state: StoreSchema) => state.profile?.validationErrors;
