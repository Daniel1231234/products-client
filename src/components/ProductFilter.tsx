import React from "react";
import Button, { ButtonVariant } from "./Button";

interface ProductFilterProps {}

const ProductFilter: React.FC<ProductFilterProps> = ({}) => {
  return (
    <div className="ProductFilter">
      <div className="inner">
        <Button variant={ButtonVariant.Add} />
        <input type="text" placeholder="Search products" />
        <div className="sort">
          <span>Sort by: </span>
          <select>
            <option value="name">Name</option>
            <option value="createdAt">Recently Added</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
