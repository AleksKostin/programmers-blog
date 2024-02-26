import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((response) => {
  // @ts-ignore
  // Искуственная задержка - для имитации бэкенда
  setTimeout(() => response(import('./AddCommentForm')), 1500);
}));
