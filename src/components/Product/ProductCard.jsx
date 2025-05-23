import React from "react";
import heartCircle from "../../assets/icons/heart-circle.svg";
import hoverHeartCircle from "../../assets/icons/red-heart.svg";
import activeHeartCircle from "../../assets/icons/red-heart-active.svg";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={"/productDetails"}
      className="relative  w-full font-helvetica-medium "
    >
      {/* Wishlist Icon */}
      <div className="absolute top-2 right-2 z-10">
        <button
          className="group"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <img
            src={heartCircle}
            alt="wishlist"
            className="group-hover:hidden group-active:hidden w-8 h-8"
          />
          <img
            src={hoverHeartCircle}
            alt="wishlist"
            className="hidden group-hover:block group-active:hidden w-8 h-8"
          />
          <img
            src={activeHeartCircle}
            alt="wishlist"
            className="hidden group-active:block w-8 h-8"
          />
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
      <div className="mt-2 px-2 sm:ml-5">
        <p className=" text-[15px] uppercase text-black tracking-wider line-clamp-2">
          {product.title}
        </p>
        <div className="">
          <span className="text-[#C5000D] font-helvetica-light font-bold text-[15px] mr-2">
            Rs.{product.newPrice}
          </span>
          <span className="line-through text-[15px] text-black font-helvetica-light font-bold">
            Rs.{product.oldPrice}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
