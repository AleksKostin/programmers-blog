import { lazy } from 'react';

export const ArticleDetailsPage = lazy(() => new Promise((response) => {
  // @ts-ignore
  setTimeout(() => response(import('./ArticleDetailsPage')), 1500);
}));
