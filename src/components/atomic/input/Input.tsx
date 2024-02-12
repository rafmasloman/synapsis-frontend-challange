import React from 'react';

interface InputPropsType extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputPropsType>(
  ({ type, ...props }, ref) => {
    console.log('props : ', props);

    return (
      <input
        type={type}
        className="bg-gray-50 px-5 py-2.5 rounded-lg"
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;
