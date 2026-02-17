import { Search, Heart, UserRound, ShoppingCart } from "lucide-react";
import new_arrival from "../assets/new_arrival_img.svg";

const Navbar = () => {
  return (
    <div className="p-4 ">
      {/* navbar */}
      <div className="flex justify-between items-center lg:mb-8 lg:m-4 lg:text-lg">
        {/* logo */}
        <div className="text-4xl font-bold uppercase tracking-tighter">
          Tagged<span className="text-red-500">.</span>
        </div>
        {/* Icons */}
        <div className="flex gap-2 lg:gap-4 items-center">
          <button className="bg-gray-100 p-2.5 lg:p-3.5 cursor-pointer rounded-md">
            <Heart className="w-3.5 h-3.5 lg:w-5 lg:h-5" />
          </button>
          <button className="bg-gray-100 p-2.5 lg:p-3.5 cursor-pointer rounded-md">
            <UserRound className="w-3.5 h-3.5 lg:w-5 lg:h-5" />
          </button>
          <button className="bg-gray-100 p-2.5 lg:p-3.5 cursor-pointer rounded-md">
            <ShoppingCart className="w-3.5 h-3.5 lg:w-5 lg:h-5" />
          </button>
          {/* search input on big screen*/}
          <div className="bg-gray-100 w-60 hidden lg:block order-first relative rounded-md border border-gray-200">
            <Search
              size={21}
              className="absolute top-1/2 -translate-y-1/2 left-1.5"
            />
            <input
              placeholder="search"
              className="w-full bg-transparent py-2 capitalize outline-none pl-8 pr-3"
            />
          </div>
        </div>
      </div>
      {/* search input on small screen*/}
      <div className="mb-4 bg-gray-100 relative flex text-center mt-6 lg:hidden rounded-md border border-gray-200">
        <Search
          size={21}
          className="absolute top-1/2 -translate-y-1/2 left-1.5"
        />
        <input
          placeholder="search"
          className="text-sm w-full bg-transparent py-2 capitalize outline-none pl-8 pr-3"
        />
      </div>
      <div className="border-t border-gray-300"></div>
      <div className="flex justify-center my-8 lg:my-16 px-1.5">
        <div className="w-full">
          <img
            alt="New Arrivals"
            src={new_arrival}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="border-t border-gray-300"></div>
    </div>
  );
};

export default Navbar;
