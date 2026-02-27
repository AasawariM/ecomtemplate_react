import { CircleX } from "lucide-react";
import FilterSidebar from "./FilterSidebar";
const MobileFilterDrawer = ({
  onClose,
  onCategoryChange,
  onReset,
  selectedCategories,
  handleFilterChange,
  filters,
}) => {
  return (
    <div className="lg:hidden fixed z-50 inset-0">
      {/* overlay */}
      <div onClick={onClose} className="absolute inset-0 bg-black/65"></div>
      {/* Filter Drawer */}
      <div className="absolute top-0 left-0 w-80 max-w-[85vw] shadow-lg h-full bg-white flex flex-col">
        <div className="flex justify-between items-center p-3.5 border-b border-gray-200 bg-white sticky z-10 top-0">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button
            onClick={onClose}
            className="hover:bg-gray-100 cursor-pointer p-1 rounded"
          >
            <CircleX className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto pt-0 p-4">
          <FilterSidebar
            onReset={onReset}
            onCategoryChange={onCategoryChange}
            selectedCategories={selectedCategories}
            handleFilterChange={handleFilterChange}
            filters={filters}
          />
        </div>
        {/*bottom buttons */}
        <div className="border-t border-gray-200 p-4 bg-white sticky bottom-0">
          <div className="flex space-x-3">
            <button
              onClick={onReset}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Clear All
            </button>
            <button
              // Because filtering already happens automatically when checkbox changes.
              // Apply button should only:
              // Close the drawer
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-[#FF454C] text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFilterDrawer;
