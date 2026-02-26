import "./App.css";
import { useState } from "react";
import FilterSidebar from "./components/filters/FilterSidebar";
import MobileFilterDrawer from "./components/filters/MobileFilterDrawer";
import Navbar from "./components/Navbar";
import ProductSection from "./components/products/ProductSection";
import MobileDrawer from "./assets/MobileDrawer.svg";
import gyomei from "/src/assets/gyomei.svg";
import shadowflex from "/src/assets/shadowflex.svg";
import skylinesteez from "/src/assets/skylinesteez.svg";
import six_eyes_oversized_tshirt from "/src/assets/six_eyes_oversized_tshirt.svg";

//product array
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

function App() {
  // for displaying mobile drawer on small screen
  // initially showDrawer is false so drawer hidden
  const [showDrawer, setShowDrawer] = useState(false);
  const handleClick = () => {
    setShowDrawer(!showDrawer); //toggle true/false
    // !showDrawer means showDrawer = true
  };

  // Selected Filter State
  // Because checkbox filtering allows multiple selections.
  // These arrays will store checked checkbox values.
  // initially empty arrays
  const [selectedCategories, setSelectedCategories] = useState([]);
  // for categories filter as per products array filtering will be based on ProductLabel
  // handler function for category filter
  const handleCategoryChange = () => {};
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      {/* new arrivals section */}
      <div className="flex flex-col lg:flex-row">
        {/* filter drawer mobile screen */}
        {/* button */}
        <div className="lg:hidden bg-gray-50 border border-gray-200 border-t-0 flex items-center justify-between p-4 text-lg font-medium">
          <p>Products</p>
          <div
            onClick={handleClick}
            className="text-sm border border-gray-300 p-2 rounded-lg flex gap-2 px-4"
          >
            <img src={MobileDrawer} className="w-4"></img>
            <p>Filters</p>
          </div>
        </div>
        {/* conditional rendering
        If showDrawer is TRUE -> render component
        If FALSE -> render nothing */}
        {/* We Pass a Function onClose as a Prop */}
        {showDrawer && (
          <MobileFilterDrawer onClose={() => setShowDrawer(false)} />
        )}
        {/* above works as
        true  && something → show something
        false && something → show nothing */}

        {/* filter sidebar lg screen*/}
        <div className="hidden lg:block">
          <div className="w-full px-4 lg:px-10">
            {/* filter Sections */}
            {/* passing category handler function to FilterSidebar component */}
            <FilterSidebar onCategoryChange={handleCategoryChange} />
          </div>
        </div>
        {/* products section */}
        <ProductSection products={products} />
      </div>
    </div>
  );
}

export default App;
