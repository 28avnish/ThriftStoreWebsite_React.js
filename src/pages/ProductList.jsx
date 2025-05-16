import React, { useState } from "react";
import ProductCard from "../components/Product/ProductCard";
import sort from "../assets/icons/sort.svg";
import filter from "../assets/icons/filter.svg";
import FilterSidebar from "../components/Product/FilterSidebar";
import SortByDropdown from "../components/Product/SortByDropdown";

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

  const [filterState, setFilterState] = useState({
    open: false,
    submenu: null,
  });

  const [sortByState, setSortByState] = useState({
    open: false,
    selected: "recommended",
  });

  return (
    <>
      {" "}
      <div className=" py-6">
        <div className="flex justify-between px-5  items-center  mb-4">
          <div className="relative">
            <div
              className="flex  items-center cursor-pointer gap-2 hover:text-gray-400 text-[#1E1E1E]"
              onClick={() =>
                setSortByState((prev) => ({
                  ...prev,
                  open: !prev.open,
                }))
              }
            >
              <span className="text-sm lg:text-base  font-bold">SORT BY</span>
              <img src={sort} alt="sort by" className="w-8 h-8" />
            </div>
            {sortByState.open && (
              <SortByDropdown
                sortByState={sortByState}
                setSortByState={setSortByState}
              />
            )}
          </div>
          <div
            className="flex items-center gap-2 cursor-pointer hover:text-gray-400 text-[#1E1E1E]"
            onClick={() => {
              setFilterState({ open: true, submenu: null });
              setSortByState(false);
            }}
          >
            <span className="text-sm lg:text-base  font-bold">FILTER</span>
            <img src={filter} alt="filter" className="w-8 h-8" />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-y-12">
          {products.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
      </div>
      <>
        {/* Backdrop */}
        <div
          className={`fixed inset-0 bg-black/75 z-40 transition-opacity duration-400 ${
            filterState.open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setFilterState({ open: false, submenu: null })}
        ></div>

        {/* Sidebar */}
        <FilterSidebar
          filterState={filterState}
          setFilterState={setFilterState}
          onClose={() => setFilterState({ open: false, submenu: null })}
        />
      </>
    </>
  );
};

export default ProductList;
