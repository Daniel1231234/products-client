import React, { useContext } from "react";
import Button, { ButtonVariant } from "./Button";
import { ProductContext } from "../context/ProductContext";

interface AddProductButtonProps {}

const AddProductButton: React.FC<AddProductButtonProps> = () => {
  const { handleSetChosenProduct } = useContext(ProductContext)!;
  return (
    <Button
      variant={ButtonVariant.Add}
      onClick={() => handleSetChosenProduct()}
    />
  );
};

export default AddProductButton;
