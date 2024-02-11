import { ReactNode } from 'react';

export type ButtonPropsTypes = {
  children: ReactNode;
  leftSection?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
};
