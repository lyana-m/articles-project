import { StoreSchema } from '@/app/providers/StoreProvider';

export const getNewCommentFormText = (state: StoreSchema) => state.newCommentForm?.text ?? '';
export const getNewCommentFormError = (state: StoreSchema) => state.newCommentForm?.error;
