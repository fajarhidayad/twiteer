import React from "react";

interface ButtonProps {
  children: string | React.ReactNode;
  onClick?: () => void;
  classname?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, classname }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-tblue rounded text-white font-medium px-6 py-2 ${classname}`}
    >
      {children}
    </button>
  );
};

export default Button;
