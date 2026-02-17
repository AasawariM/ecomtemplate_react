const PriceRange = () => {
  return (
    <div>
      <div className="space-y-2 mb-10">
        <div className="text-base lg:text-lg mb-2">Price:</div>
        <div>
          <input
            type="range"
            className="w-full accent-[#FF454C]"
            min="0"
            max="2000"
            defaultValue={2000}
          />
        </div>
        <div className="flex justify-between space-x-2">
          <input
            className="border border-[#D9D9D9] w-2/5 px-2"
            type="number"
            min="0"
            max="2000"
            defaultValue="0"
            placeholder="$ 0"
          />
          <input
            className="border border-[#D9D9D9] w-2/5 px-2"
            type="number"
            min="0"
            max="2000"
            defaultValue="2000"
            placeholder="$ 2,000"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
