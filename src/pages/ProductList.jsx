import React from "react";
import ProductCard from "../components/Product/ProductCard";

const ProductList = () => {
  const products = [
    {
      title: "Regular Fit Jersey resort shirt",
      image:
        "https://image.hm.com/assets/hm/47/bb/47bbbfa85fb88eae34a22553fb3cbc6f444bcdf7.jpg?imwidth=1536",
      newPrice: "799.00",
      oldPrice: "1,499.00",
      discount: "20",
    },
    {
      title: "Regular Fit Linen-blend shirt",
      image:
        "https://image.hm.com/assets/hm/58/91/5891961e83d49bdf089aba8e015487b85e7edbfe.jpg?imwidth=1536",
      newPrice: "799.00",
      oldPrice: "2,299.00",
      discount: "20",
    },
    {
      title: "Regular Fit Utility overshirt",
      image:
        "https://image.hm.com/assets/hm/07/c8/07c826afd9730b42c2a6326d4c96c8f01cb0dee0.jpg?imwidth=1536",
      newPrice: "799.00",
      oldPrice: "2,699.00",
      discount: "20",
    },
    {
      title: "Regular Fit Linen-blend resort shirt",
      image:
        "https://image.hm.com/assets/hm/a9/0d/a90d62872b7c4629d870b217a48c63acbc035818.jpg?imwidth=1536",
      newPrice: "799.00",
      oldPrice: "1,999.00",
      discount: "20",
    },
  ];
  return (
    <div className=" py-6">
      <div className="flex justify-between px-10 items-center mb-4">
        <span className="text-sm">SORT BY +</span>
        <span className="text-sm">FILTER</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 ">
        {products.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
