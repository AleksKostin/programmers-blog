import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise(response => {
  //@ts-ignore
  setTimeout(() => response(import('./AboutPage')), 1500)
}));
