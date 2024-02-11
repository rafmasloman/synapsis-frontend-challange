import { ReactNode } from 'react';

export type ButtonPropsTypes = {
  children: ReactNode;

  className?: string;
  onClick?: () => void;
};
