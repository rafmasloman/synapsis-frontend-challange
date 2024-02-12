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
