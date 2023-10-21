import { lazy, FC } from 'react';
import { NewCommentFormProps } from './NewCommentForm';

export const NewCommentFormAsync = lazy<FC<NewCommentFormProps>>(async () => await import('./NewCommentForm'));
