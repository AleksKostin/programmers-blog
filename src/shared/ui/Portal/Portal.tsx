import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;

}

export const Portal: React.FC<PortalProps> = (props) => {
  const {
    children,
    element,
  } = props;

  if (element) {
    return createPortal(children, element);
  }

  return createPortal(children, document.body);
};
