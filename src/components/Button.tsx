import React from "react";

export enum ButtonVariant {
  Add = "add",
  Delete = "delete",
  Save = "save",
}

interface ButtonProps {
  variant: ButtonVariant;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, disabled }) => {
  const buttonText = variant.charAt(0).toUpperCase() + variant.slice(1);

  return (
    <button
      className={`Button Button--${variant} ${
        disabled ? "Button--disabled" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

export default Button;
