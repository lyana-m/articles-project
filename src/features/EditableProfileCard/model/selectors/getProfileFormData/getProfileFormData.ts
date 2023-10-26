import { StoreSchema } from 'app/providers/StoreProvider';

export const getProfileFormData = (state: StoreSchema) => state.profile?.formData;
