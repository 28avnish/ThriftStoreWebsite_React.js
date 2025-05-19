import React, { useState, useRef } from "react";

const categories = [
  "VIEW ALL",
  "T-SHIRTS & TANKS",
  "SHIRTS",
  "HOODIES & SWEATSHIRTS",
  "CARDIGANS & JUMPERS",
  "BLAZERS & SUITS",
  "JACKETS & COATS",
  "TROUSERS",
  "JEANS",
  "SHORTS",
  "UNDERWEAR",
  "SOCKS",
  "NIGHTWEAR & LOUNGEWEAR",
  "SWIMWEAR",
  "FORMALS",
];

const CategorySlider = () => {
  const [active, setActive] = useState("T-SHIRTS & TANKS");
  const scrollRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 2; // scroll-fast
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      ref={scrollRef}
      className="overflow-hidden font-bold tracking-wider hover:overflow-x-auto whitespace-nowrap ms-5 pe-5 scrollbar-thin scrollbar-hover cursor-grab"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="flex w-max gap-2 py-2 ">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`border border-black px-4 py-2 text-sm whitespace-nowrap
              ${
                active === category
                  ? "bg-black text-white font-helvetica-bold"
                  : "text-black bg-white hover:bg-gray-100"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
