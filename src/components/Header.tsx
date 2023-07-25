import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="Header">
      <div className="inner-container">
        <h2>My Store</h2>
      </div>
    </div>
  );
};

export default Header;
