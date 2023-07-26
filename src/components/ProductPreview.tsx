import React from "react";
import { Product } from "../models";
import Button, { ButtonVariant } from "./Button";

interface ProductPreviewProps {
  product: Product;
  handleDeleteProduct: Function;
  chosenProduct: Product | null;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({
  product,
  handleDeleteProduct,
  chosenProduct,
}) => {
  return (
    <div
      className={
        chosenProduct?._id === product._id
          ? "ProductPreview active"
          : "ProductPreview"
      }
    >
      <div className="left">
        <div className="img-container">
          <img src={`/images/${product.imgUrl}`} alt="" />
        </div>
        <h3 className="name">{product.name}</h3>
        <p className="description">{product.description}</p>
      </div>
      <Button
        variant={ButtonVariant.Delete}
        onClick={() => handleDeleteProduct(product._id)}
      />
    </div>
  );
};

export default ProductPreview;
