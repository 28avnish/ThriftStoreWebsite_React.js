import React, { useEffect, useRef, useState } from "react";
import heart from "../assets/icons/heart-circle.svg";
import ReviewSidebar from "../components/Product/ReviewSidebar";

const ProductDetails = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [reviewState, setReviewState] = useState(false);
  const [isSticky, setIsSticky] = useState(true);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <>
      {" "}
      <div className="flex text-[15px] font-helvetica-regular  flex-col md:flex-row gap-4 md:gap-10 lg:gap-24 xl:gap-32 2xl:gap-44 md:pe-10 lg:pe-24 xl:pe-32 2xl:pe-44 xl:w-[75%] mx-auto tracking-wider">
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
            <div className=" bg-black text-white px-2 w-fit">-25%</div>
            <button className="hidden md:block  ">
              <img src={heart} alt="wishlist" className=" w-8 h-8" />
            </button>
          </div>

          <h1 className="tracking-wider text-lg  uppercase">
            Regular Fit Shimmering T-Shirt
          </h1>

          <div className="flex items-center gap-2 tracking-wider">
            <span className="text-[#C5000D] text-[17px] font-bold">
              Rs. 1,129.00
            </span>
            <span className="line-through text-black font-helvetica-light text-[17px] font-bold ">
              Rs. 1,499.00
            </span>
          </div>
          <p className="font-helvetica-thin font-bold  tracking-wider">
            MRP inclusive of all taxes
          </p>

          <div className=" tracking-wider mt-4">COLOUR: Brown</div>

          <div className=" mt-4">SELECT SIZE</div>
          <div className="flex flex-wrap gap-4">
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="bg-black text-[#F4ECD7] w-16 md:w-18 2xl:w-20 h-14  py-3 px-3  hover:bg-[#F4ECD7] hover:text-black"
              >
                {size}
              </button>
            ))}
          </div>

          <div className="flex justify-end">
            <a href="#" className=" hover:text-gray-500 underline mt-1">
              SIZE GUIDE
            </a>
          </div>

          {/* Add to Bag Button */}
          <div ref={footerRef} className=""></div>
          <div
            className={`${
              isSticky ? "fixed bottom-0 left-0 right-0 bg-white " : "static"
            }  bg-black text-white hover:bg-[#F4ECD7] hover:text-black hover:font-helvetica-bold  text-center py-4 px-5 z-50`}
            style={
              isSticky ? { boxShadow: "0 -4px 12px rgba(0, 0, 0, 0.15)" } : {}
            }
          >
            <button
              className={`${
                isSticky ? "bg-black  w-full py-4 shadow-2xl " : "w-full"
              }`}
            >
              ADD TO CART
            </button>
          </div>

          {/* Hidden footer trigger */}

          <div className="flex items-center justify-between gap-2 mt-4">
            <div
              className=" underline cursor-pointer"
              onClick={() => setReviewState(true)}
            >
              REVIEWS [13]
            </div>
            <div className="flex items-end gap-2">
              <div className="flex gap-1 text-yellow-500 text-xl">★★★★☆</div>
              <div className="">4.8</div>
            </div>
          </div>

          {/* Description & Fit Toggle */}
          <div
            className={`mt-4   ${
              showDescription && "font-helvetica-bold"
            } border-t pt-2 cursor-pointer flex justify-between items-center`}
            onClick={() => setShowDescription(!showDescription)}
          >
            DESCRIPTION & FIT{" "}
            <span className="text-xl">{showDescription ? "−" : "+"}</span>
          </div>

          {/* Toggle Content */}
          {showDescription && (
            <div className="mt-2 tracking-wide  leading-relaxed space-y-2">
              <p>
                T-shirt in sheer jersey containing shimmering, metallic threads.
                Round, rib-trimmed neckline and a straight-cut hem. Regular fit
                for comfortable wear and a classic silhouette.
              </p>

              <p>
                <span className="font-helvetica-bold">Model size:</span> The
                model is 186cm/6'1" and wears a size M
              </p>
              <p>
                <span className="font-helvetica-bold">Size:</span>
              </p>
              <ul className="list-disc list-inside">
                <li>S: Width: 1.02 m, Length: 67 cm</li>
                <li>M: Width: 1.10 m, Length: 68 cm</li>
                <li>L: Width: 1.18 m, Length: 70 cm</li>
                <li>XL: Width: 1.26 m, Length: 71 cm</li>
              </ul>
              <p>
                <span className="font-helvetica-bold">Length:</span> Regular
                length
              </p>
              <p>
                <span className="font-helvetica-bold">Sleeve Length:</span>{" "}
                Short sleeve
              </p>
              <p>
                <span className="font-helvetica-bold">Fit:</span> Regular fit
              </p>
              <p>
                <span className="font-helvetica-bold">Neckline:</span> Round
                neck
              </p>
              <p>
                <span className="font-helvetica-bold">Description:</span> Brown,
                Solid colour
              </p>
              <p>
                <span className="font-helvetica-bold">Price (MRP):</span> Rs.
                1,499.00 incl. of all taxes
              </p>
            </div>
          )}
        </div>
      </div>
      <ReviewSidebar
        reviewState={reviewState}
        setReviewState={setReviewState}
      />
    </>
  );
};

export default ProductDetails;
