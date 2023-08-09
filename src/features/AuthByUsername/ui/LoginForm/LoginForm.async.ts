import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((response) => {
  // @ts-ignore
  // Искуственная задержка - для имитации бэкенда
  setTimeout(() => response(import('./LoginForm')), 1500);
}));
