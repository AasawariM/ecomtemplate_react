const ProductCard = ({ product }) => {
  return (
    <div>
      {/* group class is a utility that allows you to style child elements based on the state of their parent element.  */}
      {/* looping over an array */}
      <div className="group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
        {/* apsect-square = Ensures all product images are perfect squares
          Combined with object-cover, the image fills the square without stretching. */}

        <div className="aspect-square overflow-hidden bg-gray-50">
          <img
            src={product.productImage}
            alt={product.productName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-3 sm:p-4">
          <h3 className="text-sm sm:text-base lg:text-lg font-medium text-gray-900 mb-1 line-clamp-2 group-hover:text-[#FF454C] transition-colors">
            {product.productName}
          </h3>
          <p className="text-base sm:text-lg lg:text-xl font-semibold text-[#FF454C]">
            {" "}
            ₹{product.productPrice}
          </p>
          <div className="hidden sm:block mt-2 space-y-1">
            <p className="text-xs text-gray-500 capitalize">
              {product.productLabel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
