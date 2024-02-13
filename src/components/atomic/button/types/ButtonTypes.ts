import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonPropsTypes extends ButtonHTMLAttributes<any> {
  children: ReactNode;
  leftSection?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'reset' | 'submit';
};
