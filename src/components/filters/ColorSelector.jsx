const ColorSelector = ({ selectedOptions = [], onChange }) => {
  // const colors = [
  //   "bg-black",
  //   "bg-white",
  //   "bg-green-500",
  //   "bg-amber-400",
  //   "bg-blue-600",
  //   "bg-[#808080]",
  // ];
  const colors = [
    { label: "Black", class: "bg-black" },
    { label: "White", class: "bg-white" },
    { label: "Green", class: "bg-green-500" },
    { label: "Yellow", class: "bg-amber-400" },
    { label: "Blue", class: "bg-blue-600" },
    { label: "Grey", class: "bg-[#808080]" },
  ];

  return (
    <div>
      <div className="space-y-2">
        <div className="text-base lg:text-lg mb-2">Color:</div>
        <div className="flex gap-2">
          {/* {colors.map((color, index) => (
            <div
              key={index}
              className={`${color} border border-gray-300 h-8 w-8 lg:h-9 lg:w-9 rounded-full cursor-pointer`}
            ></div>
          ))} */}
          {/* updated logic after adding filters */}
          {colors.map((color) => {
            //Checks if color is selected
            const isSelected = selectedOptions.includes(color.label);
            return (
              <div
                key={color.label}
                onClick={() => onChange(color.label)}
                className={`${color.class} border border-gray-300 h-8 w-8 lg:h-9 lg:w-9 rounded-full cursor-pointer
                ${isSelected ? "ring-2 ring-red-500" : ""}
                `}
              ></div>
            );
          })}
        </div>
      </div>
      <div className="my-3 border-t border-[#D9D9D9]"></div>
    </div>
  );
};

export default ColorSelector;
