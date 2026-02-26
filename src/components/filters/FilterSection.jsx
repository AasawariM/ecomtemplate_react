const FilterSection = ({ title, options, onChange }) => {
  return (
    <div className="space-y-2">
      <div className="text-base lg:text-lg">{title}:</div>
      {/* looping through an array using map method */}
      {options.map((item, index) => (
        // Each child in a list should have a unique "key" prop.
        <div key={index} className="flex justify-between">
          <div className="flex space-x-3">
            <input
              type="checkbox"
              value={item.label}
              // inside FilterSection: onChange = handleCategoryChange
              // if onChange exists → call it
              // if not → do nothing
              // arrow function bcz
              // Because this would run immediately when component renders.
              // onChange={onChange(item.label)}
              // Instead we need a function that runs only when checkbox changes.
              // below line means When checkbox changes, if onChange function exists, call it and send item.label.
              onChange={() => {
                if (onChange) {
                  onChange(item.label); //passing label as bcz
                  // when user clicks a checkbox, we need to know Which category did they click? and send that to app to update state
                  // and  onChange(item.label) actually means handleCategoryChange(item.label)
                }
              }}
            />
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
