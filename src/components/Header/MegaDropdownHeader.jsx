import React, { useState } from "react";
import arrowDown2 from "../../assets/icons/arrow-down-2.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

const MegaDropdownHeader = () => {
  const [activeCategory, setActiveCategory] = useState("sweatshirts");

  // Handle category hover to show specific options
  const handleCategoryHover = (category) => {
    setActiveCategory(category);
  };

  return (
    <header className="hidden xl:block font-helvetica-light tracking-widest bg-[#28282B] text-white px-6 py-4">
      <nav className="max-w-screen-xl mx-auto flex justify-center items-center">
        <ul className="flex gap-10 font-semibold text-sm">
          <li className="relative group">
            <div className="flex items-center gap-1 ">
              <button className="text-[#F4ECD7] hover:text-orange-600 uppercase text-[16px]">
                NEW IN STORE
              </button>
            </div>
          </li>
          <li className="relative group">
            <div className="flex items-center gap-1 ">
              <button className="text-[#F4ECD7] hover:text-orange-600 uppercase text-[16px]">
                CLEARANCE SALE
              </button>
            </div>
          </li>
          <li className="relative group">
            <div className="flex items-center gap-1 ">
              <button className="text-[#F4ECD7] hover:text-orange-600 uppercase text-[16px]">
                Men's Clothing
              </button>
              <img src={arrowDown2} className="h-5" alt="down" />
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 top-full w-[900px] rounded-b-lg bg-[#28282B] text-[#F4ECD7] shadow-xl mt-4 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-50">
              <div className="flex">
                {/* Left side with buttons */}
                <div className="w-2/4 uppercase border-r py-2">
                  <div
                    className=" flex justify-between hover:text-orange-600 px-6 py-2 cursor-pointer"
                    onMouseEnter={() => handleCategoryHover("sweatshirts")}
                  >
                    <div className="block   text-left ">
                      Vintage Sweatshirts & Jumpers
                    </div>
                    <img src={arrowRight} className="h-5" alt="right" />
                  </div>
                  <div
                    className="flex justify-between hover:text-orange-600 px-6 py-2 cursor-pointer"
                    onMouseEnter={() => handleCategoryHover("tops")}
                  >
                    <div className="block  text-left ">Vintage Tops & T's</div>
                    <img src={arrowRight} className="h-5" alt="right" />
                  </div>
                  <div
                    className="flex justify-between hover:text-orange-600 px-6 py-2 cursor-pointer"
                    onMouseEnter={() => handleCategoryHover("dresses")}
                  >
                    <div className="block  text-left ">Vintage Dresses</div>
                    <img src={arrowRight} className="h-5" alt="right" />
                  </div>
                  <div
                    className="flex justify-between hover:text-orange-600 px-6 py-2 cursor-pointer"
                    onMouseEnter={() => handleCategoryHover("shirts")}
                  >
                    <div className="block  text-left ">Vintage Shirts</div>
                    <img src={arrowRight} className="h-5" alt="right" />
                  </div>
                  <div
                    className="flex justify-between hover:text-orange-600 px-6 py-2 cursor-pointer"
                    onMouseEnter={() => handleCategoryHover("jackets")}
                  >
                    <div className="block  text-left ">
                      Vintage Jackets & Coats
                    </div>
                    <img src={arrowRight} className="h-5" alt="right" />
                  </div>
                  <div
                    className="flex justify-between hover:text-orange-600 px-6 py-2 cursor-pointer"
                    onMouseEnter={() => handleCategoryHover("jeans")}
                  >
                    <div className="block  text-left ">
                      Vintage Jeans & Trousers
                    </div>
                    <img src={arrowRight} className="h-5" alt="right" />
                  </div>
                  <div
                    className="flex justify-between hover:text-orange-600 px-6 py-2 cursor-pointer"
                    onMouseEnter={() => handleCategoryHover("ski")}
                  >
                    <div className="block  text-left ">
                      Retro Ski Suits & Jackets
                    </div>
                    <img src={arrowRight} className="h-5" alt="right" />
                  </div>
                  <div
                    className="flex justify-between hover:text-orange-600 px-6 py-2 cursor-pointer"
                    onMouseEnter={() => handleCategoryHover("brand")}
                  >
                    <div className="block  text-left ">Shop by Brand</div>
                    <img src={arrowRight} className="h-5" alt="right" />
                  </div>
                  <div
                    className="flex justify-between hover:text-orange-600  px-6 py-2 cursor-pointer"
                    onMouseEnter={() => handleCategoryHover("accessories")}
                  >
                    <div className="block  text-left ">Accessories</div>
                    <img src={arrowRight} className="h-5" alt="right" />
                  </div>
                </div>

                {/* Right side - content shown based on hover */}
                <div className="font-helvetica-thin tracking-widest w-3/4 px-6 ">
                  {activeCategory === "sweatshirts" && (
                    <div>
                      <h4 className="font-semibold text-lg mb-4">
                        Collections
                      </h4>
                      <ul className="space-y-2">
                        <li className="hover:text-orange-600 cursor-pointer">
                          Vintage Casual Sweatshirts
                        </li>
                        <li className="hover:text-orange-600 cursor-pointer">
                          Vintage Wool Sweatshirts
                        </li>
                        <li className="hover:text-orange-600 cursor-pointer">
                          Vintage Logo Sweatshirts
                        </li>
                        <li className="hover:text-orange-600 cursor-pointer">
                          Vintage Graphic Sweatshirts
                        </li>
                      </ul>
                    </div>
                  )}

                  {activeCategory === "tops" && (
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Tops</h4>
                      <ul className="space-y-2">
                        <li className="hover:text-orange-600 cursor-pointer">
                          Vintage Polo Shirts
                        </li>
                        <li className="hover:text-orange-600 cursor-pointer">
                          Vintage T-Shirts
                        </li>
                        <li className="hover:text-orange-600 cursor-pointer">
                          Vintage Button-Up Shirts
                        </li>
                        <li className="hover:text-orange-600 cursor-pointer">
                          Vintage Tank Tops
                        </li>
                      </ul>
                    </div>
                  )}

                  {activeCategory === "dresses" && (
                    <div>
                      <h4 className="font-semibold text-lg mb-4">Dresses</h4>
                      <ul className="space-y-2">
                        <li className="hover:text-orange-600 cursor-pointer">
                          Vintage A-Line Dresses
                        </li>
                        <li className="hover:text-orange-600 cursor-pointer">
                          Vintage Maxi Dresses
                        </li>
                        <li className="hover:text-orange-600 cursor-pointer">
                          Vintage Floral Dresses
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </li>

          <li className="relative group">
            <div className="flex items-center gap-1 ">
              <button className="text-[#F4ECD7] hover:text-orange-600 uppercase text-[16px]">
                SALE
              </button>
            </div>
          </li>
          <li className="relative group">
            <div className="flex items-center gap-1 ">
              <button className="text-[#F4ECD7] hover:text-orange-600 uppercase text-[16px]">
                BLOGS
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MegaDropdownHeader;
