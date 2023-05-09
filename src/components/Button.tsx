import React from "react";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: string | React.ReactNode;
  classname?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      type={props.type}
      {...props}
      className={`bg-tblue rounded text-white font-medium px-6 py-2 ${
        props.classname
      } ${props.disabled && "opacity-50 "}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
