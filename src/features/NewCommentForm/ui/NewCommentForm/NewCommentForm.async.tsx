import { lazy, FC } from 'react';
import { NewCommentFormProps } from './NewCommentForm';

export const NewCommentFormAsync = lazy<FC<NewCommentFormProps>>(
  async () =>
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(import('./NewCommentForm'));
      }, 1500)
    )
);
