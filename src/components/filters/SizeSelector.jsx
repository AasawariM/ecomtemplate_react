const SizeSelector = ({ selectedOptions = [], onChange }) => {
  const sizes = ["S", "M", "L", "XL", "XXL"];
  return (
    <div>
      <div className="space-y-2">
        <div className="text-base lg:text-lg mb-2">Size:</div>
        <div className="flex flex-wrap">
          {/* {sizes.map((size) => (
            <div key={size} className="p-2 sm:w-1/4 lg:w-1/4">
              <div className="hover:bg-gray-100 border text-center p-2 text-sm lg:text-lg cursor-pointer ">
                {size}
              </div>
            </div>
          ))} */}
          {/* updated logic after adding filters */}
          {sizes.map((size) => {
            //Checks if size is selected
            const isSelected = selectedOptions.includes(size);

            return (
              <div key={size} className="p-2 sm:w-1/4 lg:w-1/4">
                <div
                  // Calls parent handler when clicked
                  // Which triggers: handleFilterChange("sizes", size)
                  // Applies selected styling
                  onClick={() => onChange(size)}
                  className={`border text-center p-2 text-sm lg:text-lg cursor-pointer 
                    ${
                      // selected sizes are visibly highlighted.
                      isSelected ? "bg-red-500 text-white" : "hover:bg-gray-100"
                    }`}
                >
                  {size}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-3 border-t border-[#D9D9D9]"></div>
    </div>
  );
};

export default SizeSelector;
