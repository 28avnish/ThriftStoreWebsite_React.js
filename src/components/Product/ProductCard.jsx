import React from "react";
import heartCircle from "../../assets/icons/heart-circle.svg";

const ProductCard = ({ product }) => {
  return (
    <div className="relative group w-full  ">
      {/* Wishlist Icon */}
      <div className="absolute top-2 right-2 z-10">
        <button>
          <img src={heartCircle} alt="wishlist" className="w-8 h-8" />
        </button>
      </div>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full object-cover"
      />

      {/* Discount Tag */}
      <div className="absolute font-medium top-0 left-0 bg-black text-white  px-2 ">
        -{product.discount}%
      </div>

      {/* Product Info */}
      <div className="mt-2 text-center">
        <p className="text-sm text-gray-600">{product.title}</p>
        <div className="text-sm">
          <span className="text-red-600 font-bold mr-2">
            Rs.{product.newPrice}
          </span>
          <span className="line-through text-gray-500">
            Rs.{product.oldPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
