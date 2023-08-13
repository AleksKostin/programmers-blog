import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((response) => {
  // задержка только для проекта
  // @ts-ignore
  setTimeout(() => response(import('./ProfilePage')), 1500);
}));
