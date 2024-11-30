import Image from "next/image";

import logoImage from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div className="absolute w-full inset-0 bg-custom-gradient blur-md"></div>
            <Image
              src={logoImage}
              alt="sass logo"
              className="h-12 w-12 relative"
            />
          </div>
          <div
            className="border border-white border-opacity-30 h-10 w-10
        inline-flex justify-center items-center rounded-lg sm:hidden"
          >
            <MenuIcon className="text-white" />
          </div>

          <nav className="text-black hidden sm:flex items-center gap-6 ">
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Updates
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Help
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Customers
            </a>

            <button
              className="bg-white border border-white py-2 px-4 rounded-lg
             hover:bg-black hover:text-white hover:border-blue-100 transition-colors"
            >
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
