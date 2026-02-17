import "./App.css";
import FilterSection from "./components/filters/FilterSection";
import FilterSidebar from "./components/filters/FilterSidebar";
import Navbar from "./components/Navbar";
// import new_arrival from "./assets/new_arrival_img.DaCcndrq.svg";
function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      {/* new arrivals section */}
      <div className="flex flex-col lg:flex-row">
        {/* filter sidebar */}
        <div className="hidden lg:block">
          <div className="w-full px-4 lg:px-10">
            <FilterSidebar />
            {/* Sizes */}
            <div className="space-y-2">
              <div className="text-base lg:text-lg mb-2">Size:</div>
              <div className="flex flex-wrap">
                <div className="p-2 sm:w-1/4 lg:w-1/4">
                  <div className="hover:bg-gray-100 border text-center p-2 text-sm lg:text-lg cursor-pointer ">
                    S
                  </div>
                </div>
                <div className="p-2 sm:w-1/4 lg:w-1/4">
                  <div className="hover:bg-gray-100 border text-center p-2 text-sm lg:text-lg cursor-pointer ">
                    M
                  </div>
                </div>
                <div className="p-2 sm:w-1/4 lg:w-1/4">
                  <div className="hover:bg-gray-100 border text-center p-2 text-sm lg:text-lg cursor-pointer ">
                    L
                  </div>
                </div>
                <div className="p-2 sm:w-1/4 lg:w-1/4">
                  <div className="hover:bg-gray-100 border text-center p-2 text-sm lg:text-lg cursor-pointer ">
                    XL
                  </div>
                </div>
                <div className="p-2 sm:w-1/4 lg:w-1/4">
                  <div className="hover:bg-gray-100 border text-center p-2 text-sm lg:text-lg cursor-pointer ">
                    XXL
                  </div>
                </div>
              </div>
            </div>
            <div className="my-3 border-t border-[#D9D9D9]"></div>
            {/* colors */}
            <div className="space-y-2">
              <div className="text-base lg:text-lg mb-2">Color:</div>
              <div className="flex gap-2">
                <div className="border-gray-300 bg-black h-8 w-8 lg:h-9 lg:w-9 rounded-full cursor-pointer border transition duration-200"></div>
                <div className="border-gray-300 bg-white h-8 w-8 lg:h-9 lg:w-9 rounded-full cursor-pointer border transition duration-200"></div>
                <div className="border-gray-300 bg-green-500 h-8 w-8 lg:h-9 lg:w-9 rounded-full cursor-pointer border transition duration-200"></div>
                <div className="border-gray-300 bg-amber-400 h-8 w-8 lg:h-9 lg:w-9 rounded-full cursor-pointer border transition duration-200"></div>
                <div className="border-gray-300 bg-blue-600 h-8 w-8 lg:h-9 lg:w-9 rounded-full cursor-pointer border transition duration-200"></div>
                <div className="border-gray-300 bg-[#808080] h-8 w-8 lg:h-9 lg:w-9 rounded-full cursor-pointer border transition duration-200"></div>
              </div>
            </div>
            <div className="my-3 border-t border-[#D9D9D9]"></div>
            {/* price */}
            <div className="space-y-2 mb-10">
              <div className="text-base lg:text-lg mb-2">Price:</div>
              <div>
                <input
                  type="range"
                  className="w-full accent-[#FF454C]"
                  min="0"
                  max="2000"
                />
              </div>
              <div className="flex justify-between space-x-2">
                <input
                  className="border border-[#D9D9D9] w-2/5 px-2"
                  type="number"
                  min="0"
                  max="2000"
                  defaultValue="0"
                  placeholder="$ 0"
                />
                <input
                  className="border border-[#D9D9D9] w-2/5 px-2"
                  type="number"
                  min="0"
                  max="2000"
                  defaultValue="2000"
                  placeholder="$ 2,000"
                />
              </div>
            </div>
          </div>
        </div>
        {/* new arrival products */}
        <div className="flex-1 min-w-0">
          <h1>New Arrival</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
