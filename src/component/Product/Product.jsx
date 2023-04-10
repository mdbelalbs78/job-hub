import React from "react";

const Product = ({ product }) => {
  const { id, title, icon, job } = product;
  return (
    <div className="product">
      <img src={icon} alt="" />
      <h2 className="text-2xl">{title}</h2>
      <p>{job}</p>
    </div>
  );
};

export default Product;
