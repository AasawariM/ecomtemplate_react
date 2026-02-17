const FilterSection = ({ title, options }) => {
  return (
    <div className="space-y-2">
      <div className="text-base lg:text-lg">{title}:</div>
      {/* looping through an array using map method */}
      {options.map((item, index) => (
        // Each child in a list should have a unique "key" prop.
        <div key={index} className="flex justify-between">
          <div className="flex space-x-3">
            <input type="checkbox" value={item.label} />
            <div className="text-sm lg:text-base">{item.label}</div>
          </div>
          <div className="text-xs lg:text-sm">{item.count}</div>
        </div>
      ))}
      <div className="my-3 border-t border-[#D9D9D9]"></div>
    </div>
  );
};

export default FilterSection;
