import React from "react";

interface ButtonProps {
  children: string | React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-tblue rounded text-white font-medium px-6 py-2"
    >
      {children}
    </button>
  );
};

export default Button;
