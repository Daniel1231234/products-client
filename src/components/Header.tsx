import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { setChosenProduct } = useContext(ProductContext)!;
  return (
    <div className="Header">
      <div className="inner-container">
        <h2 onClick={() => setChosenProduct(null)}>My Store</h2>
      </div>
    </div>
  );
};

export default Header;
