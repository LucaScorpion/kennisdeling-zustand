import React, { ReactNode } from 'react';

export interface Props {
  to: string;
  children: ReactNode;
}

export const ExternalLink: React.FC<Props> = ({ children, to }) => (
  <a href={to} rel="noopener nofollow noreferrer" target="_blank">
    {children}
  </a>
);
