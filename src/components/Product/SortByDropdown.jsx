const SortByDropdown = ({ sortByState, setSortByState }) => {
  const handleSelect = (value) => {
    setSortByState({
      open: false,
      selected: value,
    });
  };

  const options = [
    { label: "Recommended", value: "recommended" },
    { label: "Newest", value: "newest" },
    { label: "Lowest price", value: "lowest" },
    { label: "Highest price", value: "highest" },
    { label: "Highest discount", value: "discount" },
  ];

  return (
    <div className="absolute z-20 mt-2 w-52 bg-white border border-black  p-4 shadow-lg font-helvetica-thin text-sm font-bold tracking-wider">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center space-x-2 mb-2 cursor-pointer"
          onMouseDown={() => handleSelect(option.value)} // ✅ This runs before blur
        >
          <input
            type="radio"
            name="sort"
            value={option.value}
            a
            checked={sortByState.selected === option.value}
            onChange={() => handleSelect(option.value)}
            className="me-2"
            style={{
              accentColor: "black", // Modern browsers support this
              width: "18px",
              height: "18px",
            }}
          />
          <span className="">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default SortByDropdown;
