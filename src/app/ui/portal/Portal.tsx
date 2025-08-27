import { type ReactNode } from 'react';
import { createPortal } from 'react-dom';

type PropsPortal = {
  children: ReactNode;
};

const Portal = ({ children }: PropsPortal) => {
    
    const root = document.getElementById('root');

    if (!root) return null;

  return <>{createPortal(children, root)}</>;
};

export default Portal;

Portal.displayName = 'Portal';
