import { lazy } from 'react';

export const ArticleListPageAsync = lazy(
  async () =>
    await new Promise((resolve) =>
      setTimeout(() => {
        // @ts-expect-error
        resolve(import('./ArticleListPage'));
      }, 1500)
    )
);
