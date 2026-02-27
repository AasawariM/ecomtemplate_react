const PriceRange = ({ price, handlePriceChange }) => {
  return (
    <div>
      <div className="space-y-2 mb-10">
        <div className="text-base lg:text-lg mb-2">Price:</div>
        <div>
          {/* Range Slider (controls max) */}
          <input
            type="range"
            className="w-full accent-[#FF454C]"
            min="0"
            max="2000"
            value={price.max}
            onChange={(e) => handlePriceChange("max", e.target.value)}
          />
        </div>
        {/* Min & Max Inputs */}
        <div className="flex justify-between space-x-2">
          <input
            className="border border-[#D9D9D9] w-2/5 px-2"
            type="number"
            min="0"
            max="2000"
            value={price.min}
            onChange={(e) => handlePriceChange("min", e.target.value)}
          />
          <input
            className="border border-[#D9D9D9] w-2/5 px-2"
            type="number"
            min="0"
            max="2000"
            value={price.max}
            onChange={(e) => handlePriceChange("max", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
