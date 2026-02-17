import gyomei from "/src/assets/gyomei.svg";
import shadowflex from "/src/assets/shadowflex.svg";
import skylinesteez from "/src/assets/skylinesteez.svg";
import six_eyes_oversized_tshirt from "/src/assets/six_eyes_oversized_tshirt.svg";

import ProductCard from "./ProductCard";
const products = [
  {
    productName: "Six Eyes Oversized T-shirt",
    productImage: six_eyes_oversized_tshirt,
    productPrice: 299,
    productLabel: "Casual T-Shirt",
  },
  {
    productName: "Gyomei",
    productImage: gyomei,
    productPrice: 399,
    productLabel: "College Wear",
  },
  {
    productName: "skylinesteez",
    productImage: skylinesteez,
    productPrice: 599,
    productLabel: "Casual T-Shirt",
  },
  {
    productName: "shadowflex",
    productImage: shadowflex,
    productPrice: 599,
    productLabel: "Hoodie",
  },
];
const ProductGrid = () => {
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
