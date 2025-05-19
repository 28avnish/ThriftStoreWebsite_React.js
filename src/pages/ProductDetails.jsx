import React, { useState } from "react";
import heart from "../assets/icons/heart-circle.svg";

const ProductDetails = () => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-24 xl:gap-32 2xl:gap-44 md:pe-10 lg:pe-24 xl:pe-32 2xl:pe-44 xl:w-[75%] mx-auto tracking-wider">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 relative">
        <img
          src="https://image.hm.com/assets/hm/84/20/8420d79923ece8662198fa83ed837adf9545d574.jpg?imwidth=1260"
          alt="Product"
          className="w-full"
        />
        <div className="absolute top-2 right-2 z-10">
          <button className="md:hidden">
            <img src={heart} alt="wishlist" className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Right: Product Info */}
      <div className="w-full px-5 md:px-0 md:w-1/2 xl:pt-10 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          {" "}
          <div className="font-medium bg-black text-white px-2 w-fit">-25%</div>
          <button className="hidden md:block  ">
            <img src={heart} alt="wishlist" className=" w-8 h-8" />
          </button>
        </div>

        <h1 className="tracking-wider font-semibold uppercase">
          Regular Fit Shimmering T-Shirt
        </h1>

        <div className="flex items-center gap-2 tracking-wider">
          <span className="text-[#C5000D] font-bold">Rs. 1,129.00</span>
          <span className="line-through text-black font-helvetica-thin font-bold">
            Rs. 1,499.00
          </span>
        </div>
        <p className="text-sm font-helvetica-thin font-bold tracking-wider">
          MRP inclusive of all taxes
        </p>

        <div className="text-sm font-semibold tracking-wider mt-4">
          COLOUR: Brown
        </div>

        <div className="text-sm font-semibold mt-4">SELECT SIZE</div>
        <div className="flex gap-4">
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className="bg-black text-[#F4ECD7] w-12 py-3 px-3 text-sm font-bold hover:bg-[#F4ECD7] hover:text-black"
            >
              {size}
            </button>
          ))}
        </div>

        <div className="flex justify-end">
          <a
            href="#"
            className="text-sm font-bold hover:text-gray-500 underline mt-1"
          >
            SIZE GUIDE
          </a>
        </div>

        <button className="mt-4 bg-black text-white hover:bg-[#F4ECD7] hover:text-black hover:font-helvetica-bold hover:text-base py-4 text-sm font-semibold">
          ADD
        </button>

        <div className="flex items-center justify-between gap-2 mt-4">
          <div className="text-sm font-semibold underline">REVIEWS [13]</div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1 text-yellow-500">★★★★☆</div>
            <div className="text-sm">4</div>
          </div>
        </div>

        {/* Description & Fit Toggle */}
        <div
          className="mt-4 text-sm font-semibold border-t pt-2 cursor-pointer flex justify-between items-center"
          onClick={() => setShowDescription(!showDescription)}
        >
          DESCRIPTION & FIT{" "}
          <span className="text-xl">{showDescription ? "−" : "+"}</span>
        </div>

        {/* Toggle Content */}
        {showDescription && (
          <div className="text-sm mt-2 leading-relaxed tracking-wide space-y-2">
            <p>
              T-shirt in sheer jersey containing shimmering, metallic threads.
              Round, rib-trimmed neckline and a straight-cut hem. Regular fit
              for comfortable wear and a classic silhouette.
            </p>
            <p>Art. No.: 1258275001</p>

            <p>
              <strong>Model size:</strong> The model is 186cm/6'1" and wears a
              size M
            </p>
            <p>
              <strong>Size:</strong>
            </p>
            <ul className="list-disc list-inside">
              <li>S: Width: 1.02 m, Length: 67 cm</li>
              <li>M: Width: 1.10 m, Length: 68 cm</li>
              <li>L: Width: 1.18 m, Length: 70 cm</li>
              <li>XL: Width: 1.26 m, Length: 71 cm</li>
            </ul>
            <p>
              <strong>Length:</strong> Regular length
            </p>
            <p>
              <strong>Sleeve Length:</strong> Short sleeve
            </p>
            <p>
              <strong>Fit:</strong> Regular fit
            </p>
            <p>
              <strong>Neckline:</strong> Round neck
            </p>
            <p>
              <strong>Description:</strong> Brown, Solid colour
            </p>
            <p>
              <strong>Price (MRP):</strong> Rs. 1,499.00 incl. of all taxes
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
