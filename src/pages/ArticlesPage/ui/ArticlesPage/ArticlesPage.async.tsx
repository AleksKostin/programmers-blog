import { lazy } from 'react';

export const ArticlesPage = lazy(() => new Promise((response) => {
  // @ts-ignore
  setTimeout(() => response(import('./ArticlesPage')), 1500);
}));
