import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  buttonClass?: string;
}
export const Button = ({ children = "Submit", buttonClass }: ButtonProps) => {
  return (
    <button
      className={`${buttonClass} h-[48px] bg-white w-[100px] rounded-[8px] flex flex-row items-center justify-center`}
    >
      {children}
    </button>
  );
};

export default Button;
