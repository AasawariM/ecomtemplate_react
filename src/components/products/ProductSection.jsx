import ProductGrid from "./ProductGrid";

const ProductSection = ({ products }) => {
  return (
    <div className="flex-1">
      <div className="flex flex-col gap-4 py-4 px-4 lg:py-5 lg:pr-5 lg:flex-row lg:justify-between lg:items-center">
        {/* home left */}
        <div className="flex space-x-2 items-center text-sm lg:text-base">
          <a href="/" className="hover:underline text-gray-600">
            Home
          </a>
          <span className="text-gray-400">›</span>
          <span className="font-medium text-gray-800">New Arrivals</span>
        </div>
        {/* right sort dropdown */}
        <div className="flex space-x-3 items-center">
          <div className="border border-[#D9D9D9] rounded-sm h-9 px-3 flex items-center bg-white">
            <label
              htmlFor="sort"
              className="mr-2 text-xs lg:text-sm text-gray-700 whitespace-nowrap"
            >
              Sort By:
            </label>
            <select
              id="sort"
              name="sort"
              className="text-xs lg:text-sm focus:outline-none bg-transparent min-w-0"
            >
              <option value="price-low-high" selected="">
                Price: Low to High
              </option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="name-a-z">Name: A to Z</option>
              <option value="name-z-a">Name: Z to A</option>
            </select>
          </div>
        </div>
      </div>
      {/* product grid */}
      <ProductGrid products={products} />
    </div>
  );
};

export default ProductSection;
