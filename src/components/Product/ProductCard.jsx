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
      <div className="mt-2 px-2  sm:ml-5">
        <p className="font-semibold  text-[15px] uppercase text-black tracking-wider line-clamp-2">
          {product.title}
        </p>
        <div className="">
          <span className="text-[#C5000D] font-bold text-[15px] mr-2">
            Rs.{product.newPrice}
          </span>
          <span className="line-through text-[15px] text-black font-helvetica-thin font-bold">
            Rs.{product.oldPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
