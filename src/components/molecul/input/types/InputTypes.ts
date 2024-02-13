import { ChangeEvent, ReactNode } from 'react';

export interface InputPropsTypes
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
}

export interface SelectPropsTypes
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  options?: OptionInputPropsTypes[];
  name?: string;
  control?: any;
}

export type OptionInputPropsTypes = {
  value: string;
  text: string;
};

export type SearchInputPropsTypes = {
  searchQuery?: string;
  handleSearchChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  children?: ReactNode;
};
