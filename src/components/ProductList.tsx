import React, { useContext } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import ProductPreview from "./ProductPreview";
import { ProductContext } from "../context/ProductContext";

interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = () => {
  const {
    products,
    setPage,
    page,
    totalPageCount,
    handleSetChosenProduct,
    handleDeleteProduct,
    chosenProduct,
  } = useContext(ProductContext)!;
  return (
    <div className="ProductList">
      <ul className="product-list clean-list">
        {products.map((item) => (
          <li key={item._id} onClick={() => handleSetChosenProduct(item._id)}>
            <ProductPreview
              product={item}
              handleDeleteProduct={handleDeleteProduct}
              chosenProduct={chosenProduct}
            />
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button
          className="prev-btn"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          <AiOutlineArrowLeft />
          <span>Prev Page</span>
        </button>
        <span>
          {page} of {totalPageCount}
        </span>
        <button
          className="next-btn"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPageCount}
        >
          <span>Next Page</span>
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProductList;
