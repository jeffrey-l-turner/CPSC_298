import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={`px-4 py-2 font-semibold text-white ${className}`} {...props}>
      {children}
    </button>
  );
};
