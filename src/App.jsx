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
import men_high_neck_zipper from "./assets/men_high_neck_zipper_sweatshirt.svg";
import berserk from "./assets/berserk.svg";
import pastelflow from "./assets/pastelflow.svg";
import skylinesteezback from "./assets/skylinesteezback.svg";
import college_girl from "./assets/college_girl_design_top.svg";
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
  {
    productName: "High Men Neck Zipper SweatShirt",
    productImage: men_high_neck_zipper,
    productPrice: 699,
    productLabel: "Sweat Shirts",
  },
  {
    productName: "skylineSteez",
    productImage: skylinesteezback,
    productPrice: 699,
    productLabel: "Hoodie",
  },
  {
    productName: "Berserk",
    productImage: berserk,
    productPrice: 899,
    productLabel: "Party Wear",
  },
  {
    productName: "College Girl Design Crop T Shirt",
    productImage: college_girl,
    productPrice: 999,
    productLabel: "College Wear",
  },
  {
    productName: "PastelFlow",
    productImage: pastelflow,
    productPrice: 1999,
    productLabel: "College Wear",
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
  // value = "category label"
  const handleCategoryChange = (value) => {
    // latest state value at that exact moment = prev
    // Why We Use (prev) => {} ?
    //  Because state updates are async.
    // React gives us previous value safely.
    setSelectedCategories((prev) => {
      if (prev.includes(value)) {
        // remove if exists
        return prev.filter((item) => item !== value); //Keep everything except the clicked value.
      } else {
        // add if doesnt exist
        return [...prev, value]; //Spread operator ,...prev = copy old array. , value = add new value
        // [ copy old values , add new value ]
      }
    });
  };

  // filtered products
  //Show only products whose productLabel is selected by clicking checkbox
  const filteredProducts =
    // If nothing selected Show all products.Because no filter applied.
    // If something selected Use .filter()
    selectedCategories.length === 0
      ? products
      : // .filter()  creates new array and .includes() checks inside array
        //Keep products whose label exists in selectedCategories
        products.filter((product) =>
          selectedCategories.includes(product.productLabel),
        );
  //Reset function
  const handleResetFilters = () => {
    setSelectedCategories([]); //reset means making array empty again
    // state UPDATER function to change the state value i.e to change selectedCategories array
    // so reset means selectedCategories = []
  };
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
          <MobileFilterDrawer
            onClose={() => setShowDrawer(false)}
            onCategoryChange={handleCategoryChange}
            onReset={handleResetFilters}
            selectedCategories={selectedCategories}
          />
        )}
        {/* above works as
        true  && something → show something
        false && something → show nothing */}

        {/* filter sidebar lg screen*/}
        <div className="hidden lg:block">
          <div className="w-full px-4 lg:px-10">
            {/* filter Sections */}
            {/* passing category handler function to FilterSidebar component */}

            {/* We must connect checkbox to state. 
            i.e Checkbox checked value must depend on selectedCategories */}
            <FilterSidebar
              onCategoryChange={handleCategoryChange}
              onReset={handleResetFilters}
              selectedCategories={selectedCategories}
            />
          </div>
        </div>
        {/* products section */}
        <ProductSection products={filteredProducts} />
      </div>
    </div>
  );
}

export default App;
