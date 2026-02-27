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
    department: "Mens",
    tshirtType: "Regular Fit",
    clothType: "Cotton",
    sizes: ["M", "L", "XL", "XXL"],
    color: "White",
  },
  {
    productName: "Gyomei",
    productImage: gyomei,
    productPrice: 399,
    productLabel: "College Wear",
    department: "Mens",
    tshirtType: "Oversized Fit",
    clothType: "French Teri cotton",
    sizes: ["S", "L", "XXL"],
    color: "Yellow",
  },
  {
    productName: "skylinesteez",
    productImage: skylinesteez,
    productPrice: 599,
    productLabel: "Casual T-Shirt",
    department: "Mens",
    tshirtType: "Regular Fit",
    clothType: "Cotton",
    sizes: ["S", "XL", "L"],
    color: "Black",
  },
  {
    productName: "shadowflex",
    productImage: shadowflex,
    productPrice: 599,
    productLabel: "Hoodie",
    department: "Mens",
    tshirtType: "Oversized Fit",
    clothType: "Cotton Blend",
    sizes: ["S", "M", "XXL"],
    color: "Blue",
  },
  {
    productName: "High Men Neck Zipper SweatShirt",
    productImage: men_high_neck_zipper,
    productPrice: 699,
    productLabel: "Sweat Shirts",
    department: "Mens",
    tshirtType: "Regular Fit",
    clothType: "Cotton Blend",
    sizes: ["M", "L", "XL"],
    color: "Green",
  },
  {
    productName: "skylineSteez",
    productImage: skylinesteezback,
    productPrice: 699,
    productLabel: "Hoodie",
    department: "Womens",
    tshirtType: "Oversized Fit",
    clothType: "Cotton Blend",
    sizes: ["S", "M", "XL"],
    color: "Black",
  },
  {
    productName: "Berserk",
    productImage: berserk,
    productPrice: 899,
    productLabel: "Party Wear",
    department: "Mens",
    tshirtType: "Regular Fit",
    clothType: "Kente Wear",
    sizes: ["S", "M", "L"],
    color: "Grey",
  },
  {
    productName: "College Girl Design Crop T Shirt",
    productImage: college_girl,
    productPrice: 999,
    productLabel: "College Wear",
    department: "Womens",
    tshirtType: "Oversized Fit",
    clothType: "Cotton",
    sizes: ["S", "L", "XL"],
    color: "White",
  },
  {
    productName: "PastelFlow",
    productImage: pastelflow,
    productPrice: 1999,
    productLabel: "College Wear",
    department: "Mens",
    tshirtType: "Oversized Fit",
    clothType: "Polyster",
    sizes: ["S", "M", "XL"],
    color: "Green",
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
  // (filter is empty) OR (product matches filter)
  // Product must satisfy ALL active filters.
  // const filteredProducts =
  //   // If nothing selected Show all products.Because no filter applied.
  //   // If something selected Use .filter()
  //   selectedCategories.length === 0
  //     ? products
  //     : // .filter()  creates new array and .includes() checks inside array
  //       //Keep products whose label exists in selectedCategories
  //       products.filter((product) =>
  //         selectedCategories.includes(product.productLabel),
  //       );

  //Reset function
  const handleResetFilters = () => {
    setSelectedCategories([]); //reset means making array empty again
    // state UPDATER function to change the state value i.e to change selectedCategories array
    // so reset means selectedCategories = []
    // aftering adding all fliters logic resetting them
    setFilters({
      department: [],
      tshirtType: [],
      clothType: [],
      sizes: [],
      color: [],
    });
  };

  // for all other filters we create a single state with one object
  // Instead of writing 5 different functions,
  // you created one universal function.
  const [filters, setFilters] = useState({
    department: [],
    tshirtType: [],
    clothType: [],
    sizes: [],
    color: [],
  });

  // updated filteredProducts logic for all filters
  // Combined filter logic (category + all other filters)
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.productLabel);

    const departmentMatch =
      filters.department.length === 0 ||
      filters.department.includes(product.department);

    const tshirtTypeMatch =
      filters.tshirtType.length === 0 ||
      filters.tshirtType.includes(product.tshirtType);

    const clothTypeMatch =
      filters.clothType.length === 0 ||
      filters.clothType.includes(product.clothType);

    // Since each product now has multiple sizes, you must check if:
    // At least one selected size exists inside product.sizes array
    // const sizeMatch =
    //   filters.size.length === 0 || filters.size.includes(product.size);
    const sizeMatch =
      filters.sizes.length === 0 ||
      filters.sizes.some((selectedSize) =>
        product.sizes.includes(selectedSize),
      );

    const colorMatch =
      filters.color.length === 0 || filters.color.includes(product.color);

    // Product must satisfy ALL active filters
    return (
      categoryMatch &&
      departmentMatch &&
      tshirtTypeMatch &&
      clothTypeMatch &&
      sizeMatch &&
      colorMatch
    );
  });
  // handler logic
  // filterType → which filter to update and value → what was clicked
  const handleFilterChange = (filterType, value) => {
    //prev = current filters object
    setFilters((prev) => {
      // Get Current Filter Array
      const currentValues = prev[filterType];
      // Toggle Logic
      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value];

      // Return Updated Filters Object
      return {
        ...prev,
        // [] means: Use variable value as key.
        [filterType]: updatedValues,
      };
    });
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
            handleFilterChange={handleFilterChange}
            filters={filters}
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
              handleFilterChange={handleFilterChange}
              filters={filters}
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
