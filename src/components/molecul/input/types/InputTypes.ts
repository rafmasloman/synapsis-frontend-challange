export type InputPropsTypes = {
  label?: string;
  placeholder?: string;
  classname?: string;
  name?: string;
};

export type SelectPropsTypes = {
  label?: string;
  options?: OptionInputPropsTypes[];
  name?: string;
};

export type OptionInputPropsTypes = {
  value: string;
  text: string;
};
