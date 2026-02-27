import ColorSelector from "./ColorSelector";
import FilterSection from "./FilterSection";
import PriceRange from "./PriceRange";
import SizeSelector from "./SizeSelector";

const FilterSidebar = ({
  onCategoryChange,
  onReset,
  selectedCategories,
  handleFilterChange,
  filters,
}) => {
  return (
    <div className="pt-5">
      <div className="flex justify-between">
        <div className="text-base lg:text-lg">Filter: </div>
        <div
          onClick={onReset}
          className="text-[#ff454c] underline underline-offset-4 cursor-pointer text-sm capitalize lg:text-base"
        >
          reset all
        </div>
      </div>
      <div className="my-3 border-t border-[#D9D9D9]"></div>
      {/* sections */}
      {/* Passing an Array of Objects as a Prop */}
      {/* dept */}
      <FilterSection
        title="Department"
        options={[
          { label: "Mens", count: 213 },
          { label: "Womens", count: 353 },
        ]}
        selectedOptions={filters.department}
        onChange={(value) => handleFilterChange("department", value)}
      />
      {/* Category */}
      <FilterSection
        title="Category"
        options={[
          { label: "Casual T-Shirt", count: 353 },
          { label: "Party Wear", count: 213 },
          { label: "College Wear", count: 213 },
          { label: "Hoodie", count: 213 },
          { label: "Sweat Shirts", count: 213 },
        ]}
        onChange={onCategoryChange}
        selectedOptions={selectedCategories}
      />
      {/* Tshirt Type */}
      <FilterSection
        title="Tshirt Type"
        options={[
          { label: "Regular Fit", count: 213 },
          { label: "Oversized Fit", count: 353 },
        ]}
        selectedOptions={filters.tshirtType}
        onChange={(value) => handleFilterChange("tshirtType", value)}
      />
      {/* Cloth Type */}
      <FilterSection
        title="Cloth Type"
        options={[
          { label: "Cotton", count: 213 },
          { label: "Cotton Blend", count: 353 },
          { label: "Polyster", count: 353 },
          { label: "French Teri cotton", count: 353 },
          { label: "Kente Wear", count: 353 },
        ]}
        selectedOptions={filters.clothType}
        onChange={(value) => handleFilterChange("clothType", value)}
      />
      {/* Sizes */}
      <SizeSelector
        selectedOptions={filters.sizes} //Gets selected sizes from App
        onChange={(value) => {
          handleFilterChange("sizes", value);
        }}
      />
      {/* colors */}
      <ColorSelector
        selectedOptions={filters.color}
        onChange={(value) => handleFilterChange("color", value)}
      />
      {/* price */}
      <PriceRange />
    </div>
  );
};

export default FilterSidebar;
