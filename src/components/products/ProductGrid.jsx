import ProductCard from "./ProductCard";
const ProductGrid = ({ products }) => {
  return (
    <div>
      <div className="px-4 lg:px-6">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-8 lg:mb-10">
          {products.map((product, index) => (
            /* product card */
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
