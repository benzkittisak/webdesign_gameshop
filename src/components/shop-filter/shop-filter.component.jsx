import React from "react";

const ShopFilter = ({ filter, updateFilter }) => {
 
  return (
    <ul className="shop-category-list">
      <li className="active">All</li>
      <li>Accessories</li>
      <li>PlayStation 5</li>
      <li>Xbox</li>
    </ul>
  );
};

export default ShopFilter;
