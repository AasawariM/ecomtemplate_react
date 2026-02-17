const ColorSelector = () => {
  const colors = [
    "bg-black",
    "bg-white",
    "bg-green-500",
    "bg-amber-400",
    "bg-blue-600",
    "bg-[#808080]",
  ];
  return (
    <div>
      <div className="space-y-2">
        <div className="text-base lg:text-lg mb-2">Color:</div>
        <div className="flex gap-2">
          {colors.map((color, index) => (
            <div
              key={index}
              className={`${color} border border-gray-300 h-8 w-8 lg:h-9 lg:w-9 rounded-full cursor-pointer`}
            ></div>
          ))}
        </div>
      </div>
      <div className="my-3 border-t border-[#D9D9D9]"></div>
    </div>
  );
};

export default ColorSelector;
