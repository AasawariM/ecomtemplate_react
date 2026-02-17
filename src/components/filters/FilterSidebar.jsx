import FilterSection from "./FilterSection";

const FilterSidebar = () => {
  return (
    <div>
      <div className="flex justify-between pt-1.5">
        <div className="text-base lg:text-lg">Filter: </div>
        <div className="text-[#ff454c] underline underline-offset-4 cursor-pointer text-sm capitalize lg:text-base">
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
      />
      {/* Category */}
      <FilterSection
        title="Category"
        options={[
          { label: "Casual Tshirt", count: 353 },
          { label: "Party Wear", count: 213 },
          { label: "College Wear", count: 213 },
          { label: "Hoodie", count: 213 },
          { label: "Sweat Shirts", count: 213 },
        ]}
      />
      {/* Tshirt Type */}
      <FilterSection
        title="Tshirt Type"
        options={[
          { label: "Regular Fit", count: 213 },
          { label: "Oversized Fit", count: 353 },
        ]}
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
      />
    </div>
  );
};

export default FilterSidebar;
