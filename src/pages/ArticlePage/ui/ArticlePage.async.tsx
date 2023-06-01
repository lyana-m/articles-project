import { lazy } from 'react';

export const ArticlePageAsync = lazy(
  async () =>
    await new Promise((resolve) =>
      setTimeout(() => {
        // @ts-expect-error
        resolve(import('./ArticlePage'));
      }, 1500)
    )
);
