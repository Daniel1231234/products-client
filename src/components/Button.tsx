import React from "react";

export enum ButtonVariant {
  Add = "add",
  Delete = "delete",
  Save = "save",
}

interface ButtonProps {
  variant: ButtonVariant;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick }) => {
  const buttonText = variant.charAt(0).toUpperCase() + variant.slice(1);

  return (
    <button className={`Button Button--${variant}`} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default Button;
