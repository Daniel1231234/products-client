import React, { useContext } from "react";
import { SortByEnum } from "../models";
import { ProductContext } from "../context/ProductContext";
import AddProductButton from "./AddProductButton";

interface ProductFilterProps {}

const ProductFilter: React.FC<ProductFilterProps> = ({}) => {
  const { query, setQuery, sortBy, setSortBy } = useContext(ProductContext)!;
  return (
    <div className="ProductFilter">
      <div className="inner">
        <AddProductButton />
        <input
          type="text"
          placeholder="Search products"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <div className="sort">
          <span>Sort by: </span>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortByEnum)}
          >
            <option value="name">Name</option>
            <option value="createdAt">Recently Added</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
